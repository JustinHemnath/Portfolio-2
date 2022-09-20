import { useEffect, useState, useRef } from 'react';
import Message from './Message';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { memo } from 'react';

const Messagebox = memo(() => {
	const [messages, setMessages] = useState([]);

	const spanRef = useRef();

	useEffect(() => {
		const unsub = onSnapshot(
			doc(db, 'conversations', 'messages'),
			(doc) => {
				setMessages((prevMessage) => [
					...prevMessage,
					{ ...doc.data(), id: new Date().getTime().toString() },
				]);

				// console.log(doc.data());
			}
		);

		// spanRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });

		return () => unsub();
	}, []);

	return (
		<div className="m-1 basis-[90%] overflow-scroll scroll-smooth">
			{messages.map((item) => (
				<Message key={item.id} messages={item} />
			))}
			<span ref={spanRef}></span>
		</div>
	);
});

export default Messagebox;
