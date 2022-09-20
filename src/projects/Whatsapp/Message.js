import { auth } from '../../firebase';
import { motion } from 'framer-motion';

const style = {
	sent: `w-3/4 m-3 p-3 sm:p-4 break-words bg-[#E3FFC8] 
			rounded-xl shadow-md ml-auto text-end`,
	received: `w-3/4 m-3 p-4 sm:p-4 break-words bg-white rounded-xl 
				shadow-md mr-auto text-start`,
	name: `text-whatsappbg font-black text-lg`,

	message: `text-xl mt-2 leading-6`,
};

const Message = ({ messages }) => {
	const { currentUser } = auth;

	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			className={
				messages.uid === currentUser.uid ? style.sent : style.received
			}>
			<h1 className={style.name}>{messages.name}</h1>
			<p className={style.message}>{messages.message}</p>
		</motion.div>
	);
};

export default Message;
