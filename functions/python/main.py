from .instagram import Instagram
from time import sleep
import os
import json
from os import path
import datetime
import discord_webhook
import ast
import sys
from pytz import timezone
from discord_webhooks import DiscordWebhooks


FOLLOWER_LIMIT = 10**6

# Your instagram bot account username
insta_username = ''

# Your instagram bot account password
insta_password = ''

# Username of the real instagram account which you want to monitor
username = ''

# Change this at your own risk
MINS_TO_SLEEP = 60 * 2

discord_webhook_url = ''

def check_not_followback(following, followers):
    return list(set(following) - set(followers)) 

def check_unfollowers(current,old):
	return list(set(old) - set(current))

def check_followers(current,old):
	return list(set(current) - set(old))


def start(request):
    print(request)
    print(request.args)
    print(request.json)
    json_data = request.json['data']
    insta_username =  json_data['insta_username']
    insta_password = json_data['insta_password']
    username = json_data['username']
    discord_webhook_url = json_data['discord_webhook_url']
    print(insta_username)
    instagram = Instagram()
    instagram.with_credentials(insta_username, insta_password)
    instagram.login(force=False,two_step_verificator=True)
    sleep(2) # Delay to mimic user

    followers = []
    account = instagram.get_account(username)
    sleep(1)
    curr_time = datetime.datetime.now(timezone('US/Eastern'))
    curr_time = curr_time.strftime("%b %d, %Y - %H:%M:%S")
    followers = instagram.get_followers(account.identifier, FOLLOWER_LIMIT, 100, delayed=True) # Get 150 followers of 'kevin', 100 a time with random delay between requests
    # print(followers)
    followings = instagram.get_following(account.identifier, FOLLOWER_LIMIT, 100, delayed=True)

    current_followers = []
    current_followings = []

    for following in followings['accounts']:
        current_followings.append(following.username)

    for follower in followers['accounts']:
        current_followers.append(follower.username)

    del followers
    del followings
    not_follow_back = check_not_followback(current_followings, current_followers)
    if not path.exists(username + "_follower_list.txt"):
        f = open(username + "_follower_list.txt","w")
        f.write(str(current_followers))
        f.close()
    else:
        f = open(username + "_follower_list.txt","r+")
        old_followers = f.read()
        f.close()
        old_followers = ast.literal_eval(old_followers)

        unfollowers = check_unfollowers(current_followers,old_followers)
        followers = check_followers(current_followers,old_followers)

        follower_change  = len(current_followers)-len(old_followers)

        follow_count = len(followers)
        unfollow_count = len(unfollowers)

        discord_webhook.send_msg(username,follower_change,followers,unfollowers,follow_count,unfollow_count,curr_time,discord_webhook_url, not_follow_back)
        retMap = { 
        'username': username,
        'follower_change': follower_change,
        'followers' : followers,
        'unfollowers': unfollowers,
        'follow_count':follow_count,
        'unfollow_count': unfollow_count,
        'curr_time': curr_time,
        'discord_webhook_url': discord_webhook_url,
        'not_follow_back': not_follow_back }

        f = open(username + "_follower_list.txt","w")
        f.write(str(current_followers))
        f.close()
        retJson = json.dumps(retMap)
        return retJson

#Put your discord webhook url here.
# IMPORTANT : If you're hosting on pythonanywhere, use discordapp.com instead of discord.com in the URL


def send_msg(username, follower_change, followers, unfollowers,
             followers_count, unfollowers_count, time, webhook_url, not_follow_back):

    WEBHOOK_URL = webhook_url

    if followers == []:
        followers = 'None'

    if unfollowers == []:
        unfollowers = 'None'

    webhook = DiscordWebhooks(WEBHOOK_URL)

    webhook.set_content(title='Report for %s' % (time),
                        description="Here's your report with :heart:")

    # Appends a field
    webhook.add_field(name='Username', value=username)
    webhook.add_field(name='Total follower change', value=follower_change)

    
    if unfollowers != 'None':
        webhook.add_field(name='People who unfollowed you (%d)' %
                          (unfollowers_count),
                          value=', '.join(unfollowers))
    else:
        webhook.add_field(name='People who unfollowed you (%d)' %
                          (unfollowers_count),
                          value=unfollowers)

    if followers != 'None':
        webhook.add_field(name='People who followed you (%d)' %
                          (followers_count),
                          value=', '.join(followers))
    else:
        webhook.add_field(name='People who followed you (%d)' %
                          (followers_count),
                          value=followers)

    webhook.add_field(name='People who don\'t follow you back (%d)' % (len(not_follow_back)), value=', '.join(not_follow_back))

    webhook.send()
