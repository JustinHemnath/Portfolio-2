import { useState, useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Profile from './Profile';

const Chatapp = () => {
	const [letters, setLetters] = useState('G');

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			const name = user.displayName.split(' ');

			const arr = [];

			name.forEach((item) => {
				arr.push(item.at(0));
			});

			setLetters(arr.join(''));
		}
	}, [user]);

	return (
		<div className="h-screen">
			<nav className="flex justify-end m-4">
				<GoogleButton onClick={googleSignIn} />
				<Profile letters={letters} />
			</nav>
			<h1 className="text-center text-3xl">Work in Progress</h1>
		</div>
	);
};
export default Chatapp;
