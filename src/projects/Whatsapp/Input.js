import { useState } from 'react';
import { doc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { auth } from '../../firebase';

const style = {
	inputbox: `basis-[5%] w-full px-1 pb-1 flex gap-1`,
	input: `basis-3/4 h-12 rounded-bl-xl p-3 outline-0`,
	button: `basis-1/4 bg-purplebg text-white rounded-br-xl`,
};

const Input = () => {
	const [text, setText] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();

		const data = doc(db, 'conversation', 'messages');

		await setDoc(
			data,
			{
				[auth.currentUser.displayName]: {
					[auth.currentUser.displayName]: text,
					time: serverTimestamp(),
				},
			},
			{ merge: true }
		);

		setText('');
		console.log(auth);
	};

	return (
		<form onSubmit={sendMessage} className={style.inputbox}>
			<input
				type="text"
				value={text}
				className={style.input}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type a message..."
			/>
			<button className={style.button}>Send</button>
		</form>
	);
};
export default Input;
