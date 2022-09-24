import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import Message from './Message';

const Messagebox = ({ spanRef }) => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const q = query(collection(db, 'conversations'), orderBy('timestamp'));

		const unsub = onSnapshot(q, (querySnapshot) => {
			let mes = [];
			querySnapshot.forEach((doc) => mes.push(doc.data()));
			setMessages(mes);
		});

		return () => unsub();
	}, []);

	return (
		<div className='m-1 basis-[90%] overflow-auto scroll-smooth'>
			{messages.map((item) => (
				<Message key={item.id} messages={item} />
			))}
			<span ref={spanRef}></span>
		</div>
	);
};

export default Messagebox;
