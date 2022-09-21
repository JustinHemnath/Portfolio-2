import { useEffect, useState, useRef } from 'react';
import Message from './Message';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';

const Messagebox = () => {
	const [messages, setMessages] = useState([]);

	const spanRef = useRef();

	useEffect(() => {
		const q = query(collection(db, 'conversations'), orderBy('timestamp'));

		const unsub = onSnapshot(q, (querySnapshot) => {
			let mes = [];
			querySnapshot.forEach((doc) => mes.push(doc.data()));
			setMessages(mes);
		});

		// spanRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
		return () => unsub();
	}, []);

	return (
		<div className="m-1 basis-[90%] overflow-auto scroll-smooth">
			{messages.map((item) => (
				<Message key={item.id} messages={item} />
			))}
			<span ref={spanRef}></span>
		</div>
	);
};

export default Messagebox;
