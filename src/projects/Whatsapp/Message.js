import { auth } from '../../firebase';
import { motion } from 'framer-motion';

const style = {
	sent: `max-w-max m-3 px-4 sm:pl-8 break-words bg-whatsappsent text-black
			rounded-xl shadow-md ml-auto text-end`,
	received: `max-w-max m-3 px-3 sm:pr-8 break-words bg-white text-black rounded-xl 
				shadow-md mr-auto text-start`,
	name: `font-black text-lg text-whatsappbg pt-1 pb-2`,
	message: `text-xl mt-1 leading-6 pb-2`,
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
