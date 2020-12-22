import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  customForm
  showLoading = false
  lenOfData = 0
  notFollowBack;
  username;
  btnText;
  constructor(private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.customForm = this.formBuilder.group({
      insta_username: '',
      insta_password: '',
      username: ''
    });
  }
  ngOnInit() {
    this.notFollowBack = JSON.parse(this.storage.get('not_follow_back'));
    this.lenOfData = this.notFollowBack ? this.notFollowBack.length : 0
    this.username = this.storage.get('username')
    this.btnText = this.notFollowBack ? "Refresh List" : "Get users who don't follow you back"

  }


  async invoke(event) {
    const last_used_time = this.storage.get('last_used') ? this.storage.get('last_used') : 0
    const then = (new Date())
    then.setTime(last_used_time)
    const now = (new Date()).getTime()
    if ((now - last_used_time) > 2640000) {
      try {
        this.showLoading = true
        const insta_username = event.insta_username ? event.insta_username : 'ak.kodes_bot2'
        const insta_password = event.insta_password ? event.insta_password : ''
        const username = event.username ? event.username : insta_username
        if (insta_username === 'ak.kodes_bot2' && username === 'ak.kodes_bot2') {
          throw Error
        }
        const url = 'https://cors-anywhere.herokuapp.com/https://us-central1-akathian-2b687.cloudfunctions.net/instagram-follow'

        const data = {
          'insta_username': insta_username,
          'insta_password': insta_password,
          'username': username,
          'discord_webhook_url': 'https://discord.com/api/webhooks/782723987180486679/igw8wOLebzDCNgzqcIIYms6JCRQEJ_zIhxFEmpeZD_-d7KxRNal0KQZodvQ6Jm3dnjW_'
        }

        const fetched = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        })
        const text = await fetched.text();
        this.notFollowBack = JSON.parse(text)
        this.lenOfData = this.notFollowBack.length
        console.log(text)
        this.storage.set('not_follow_back', text);
        this.storage.set('username', username)
        this.storage.set('last_used', ((new Date()).getTime()))
        this.username = username
        this.showLoading = false

      } catch (e) {
        this.showLoading = false
      }
    } else {
      alert(`Please wait 40 minutes between each request. Last request at ${then.toUTCString()}`)
    }

  }

}
