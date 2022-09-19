import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: 'chat-app-11fb6.firebaseapp.com',
	projectId: 'chat-app-11fb6',
	storageBucket: 'chat-app-11fb6.appspot.com',
	messagingSenderId: '633534067312',
	appId: '1:633534067312:web:4a88bf44136e71f4433ab5',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
