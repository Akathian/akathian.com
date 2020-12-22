/* eslint-disable promise/always-return */
/* eslint-disable promise/no-nesting */
const functions = require('firebase-functions');
const FormData = require('form-data');
const fetch = require('node-fetch');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.getAccesToken = functions.https.onCall(async (data) => {
//     const IG_PUBLIC = functions.config().instagram.pub
//     const IG_SECRET = functions.config().instagram.sec
//     const IG_URI = functions.config().instagram.uri
//     const formdata = new FormData();
//     formdata.append('client_id', IG_PUBLIC);
//     formdata.append('client_secret', IG_SECRET);
//     formdata.append('grant_type', 'authorization_code');
//     formdata.append('redirect_uri', IG_URI);
//     formdata.append('code', data.code);
//     const requestOptions = {
//         method: 'POST',
//         body: formdata,
//         redirect: 'follow'
//       };
//     const fetched = await fetch(' https://api.instagram.com/oauth/access_token', requestOptions)
//     const text = await fetched.text();
//     return text
//   })


//   exports.get_followers = functions.https.onCall(async (data) => {
//     let Instagram = require('instagram-nodejs-without-api');
//     Instagram = new Instagram()
//     Instagram.csrfToken = await Instagram.getCsrfToken()
//     Instagram.sessionId = await Instagram.auth('ak.kodes_bot', 'Sakakumar05()')
//     const t = await Instagram.getUserDataByUsername(data.user)
//     const followers = await Instagram.getUserFollowers(t.graphql.user.id)
//     const following = await Instagram.getUser
//     Instagram.getCsrfToken().then((csrf) =>
//     {
//       Instagram.csrfToken = csrf;
//     }).then(() =>
//     {
//       return Instagram.auth('ak.kodes_bot', '()').then(sessionId =>
//       {
//         Instagram.sessionId = sessionId
//         return Instagram.getUserDataByUsername(data.user).then((t) =>
//         {
//           return Instagram.getUserFollowers(t.graphql.user.id).then((t) =>
//           {
//             console.log(t); // - instagram followers for user "username-for-get"
//           })
//         })
    
//       })
//     }).catch(console.error);
//   })