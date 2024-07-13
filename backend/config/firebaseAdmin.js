const admin = require('firebase-admin');
const serviceAccount = require('./carbon_service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://carbon-b73c7.firebaseio.com'
});

const db = admin.firestore();
module.exports = db;