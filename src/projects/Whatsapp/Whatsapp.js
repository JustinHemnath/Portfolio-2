import Navbar from './Navbar';
import Chatbox from './Chatbox';
import { useState, useEffect, useRef } from 'react';

const Whatsapp = () => {
	const [loggedInUser, setLoggedInUser] = useState({});

	const mainRef = useRef();

	useEffect(() => {
		mainRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	});

	return (
		<div ref={mainRef} className="h-[60em] p-1 bg-bgclr">
			<Navbar {...{ loggedInUser, setLoggedInUser }} />
			<div className="flex justify-center items-center">
				{loggedInUser.auth?.currentUser ? (
					<Chatbox />
				) : (
					<h1 className="mt-20 text-white text-center text-3xl sm:text-5xl font-black">
						Log in using your google account to view the chatbox
					</h1>
				)}
			</div>
		</div>
	);
};
export default Whatsapp;
