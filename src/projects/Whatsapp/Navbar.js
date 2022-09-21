import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Profile from './Profile';
import GoogleButton from 'react-google-button';
import { MdOutlineArrowBack } from 'react-icons/md';

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
		<nav className="flex justify-between m-4">
			<motion.div whileHover={{ scale: 1.2 }}>
				<Link to="/">
					<MdOutlineArrowBack className="text-4xl mt-2 text-white active:text-whatsappbg" />
				</Link>
			</motion.div>
			<div className="flex justify-end">
				{!loggedInUser.auth?.currentUser ? (
					<GoogleButton onClick={googleSignIn} />
				) : null}
				<Profile letters={letters} />
			</div>
		</nav>
	);
};
export default Navbar;
