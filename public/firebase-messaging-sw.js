/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyCzL9u4W5BAaIqyvPtlSvInRB8-RM2Zi5c",
  authDomain: "ll-rides.firebaseapp.com",
  databaseURL: "https://ll-rides.firebaseio.com",
  projectId: "ll-rides",
  storageBucket: "ll-rides.appspot.com",
  messagingSenderId: "27307104922",
  appId: "1:27307104922:web:c6b0850d24ae5f839a5d23",
  measurementId: "G-7CM9H350Q2"
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Here is a notification body!',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  }

  return self.registration.showNotification(notificationTitle, notificationOptions)
})
