import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
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

		const { displayName, uid } = auth.currentUser;

		const data = doc(db, 'conversations', 'messages');

		await setDoc(data, {
			id: new Date().getTime().toString(),
			uid,
			name: displayName,
			message: text,
		});

		setText('');
	};

	return (
		<form onSubmit={sendMessage} className={style.inputbox}>
			<input
				type="text"
				value={text}
				className={style.input}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type a message..."
				autoFocus
			/>
			<button className={style.button}>Send</button>
		</form>
	);
};
export default Input;
