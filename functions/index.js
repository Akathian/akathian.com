const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getAccesToken = functions.https.onCall(async (data) => {
    const IG_PUBLIC = functions.config().instagram.pub
    const IG_SECRET = functions.config().instagram.sec
    const IG_URI = functions.config().instagram.uri


  })