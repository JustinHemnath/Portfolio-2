import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: 'chatapp-4916c.firebaseapp.com',
	projectId: 'chatapp-4916c',
	storageBucket: 'chatapp-4916c.appspot.com',
	messagingSenderId: '476738308457',
	appId: '1:476738308457:web:9e12e61f3008cb29d595f8',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
