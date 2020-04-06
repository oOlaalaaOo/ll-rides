import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token');
  },

  init: async function() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCzL9u4W5BAaIqyvPtlSvInRB8-RM2Zi5c',
        authDomain: 'll-rides.firebaseapp.com',
        databaseURL: 'https://ll-rides.firebaseio.com',
        projectId: 'll-rides',
        storageBucket: 'll-rides.appspot.com',
        messagingSenderId: '27307104922',
        appId: '1:27307104922:web:c6b0850d24ae5f839a5d23',
        measurementId: 'G-7CM9H350Q2'
      });
    }

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false;
      }

      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();

      localforage.setItem('fcm_token', token);
      console.log('fcm_token', token);

      messaging.onMessage(payload => {
        console.log('Message received. ', payload);

        // notification.open({
        //   message: 'Notification Title',
        //   description:
        //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        //   onClick: () => {
        //     console.log('Notification Clicked!');
        //   }
        // });
      });
    } catch (error) {
      console.error(error);
    }
  }
};

export { firebaseCloudMessaging };
