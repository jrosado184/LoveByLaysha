import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDrP8nbvUkFOxYLxqSu00XYpkbl6FyIGJE',
  authDomain: 'lovebylaysha-be39b.firebaseapp.com',
  projectId: 'lovebylaysha-be39b',
  storageBucket: 'lovebylaysha-be39b.appspot.com',
  messagingSenderId: '853700492091',
  appId: '1:853700492091:web:30b9b8c5d57ee3915f951e',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
