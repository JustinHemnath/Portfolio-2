import { useEffect, useState } from 'react';
import Message from './Message';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { memo } from 'react';

const Messagebox = memo(() => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const unsub = onSnapshot(
			doc(db, 'conversations', 'messages'),
			(doc) => {
				setMessages((prevMessage) => [
					...prevMessage,
					{ ...doc.data(), id: new Date().getTime().toString() },
				]);

				console.log(doc.data());
			}
		);

		return () => unsub();
	}, []);

	return (
		<div className="m-1 basis-[90%] overflow-scroll scroll-smooth">
			{messages.map((item) => (
				<Message key={item.id} messages={item} />
			))}
		</div>
	);
});

export default Messagebox;
