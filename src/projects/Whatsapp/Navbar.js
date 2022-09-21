import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

import Profile from './Profile';
import GoogleButton from 'react-google-button';

const Navbar = ({ loggedInUser, setLoggedInUser }) => {
	const [letters, setLetters] = useState('');

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			const arr = [];
			const name = user.displayName.split(' ');

			name.forEach((item) => {
				arr.push(item.at(0));
			});

			setLetters(arr.join(''));

			setLoggedInUser(user);
		}
	}, [user, setLoggedInUser]);

	return (
		<nav className="flex justify-end m-4">
			{!loggedInUser.auth?.currentUser ? (
				<GoogleButton onClick={googleSignIn} />
			) : null}
			<Profile letters={letters} />
		</nav>
	);
};
export default Navbar;
