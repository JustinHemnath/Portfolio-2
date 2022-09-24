import { useRef } from 'react';
import Input from './Input';
import Messagebox from './Messagebox';
import logo from './whatsapp.png';

const style = {
	header: `basis-[5%] sm:basis-[10%] bg-whatsappbg sm:rounded-t-lg text-center text-white 
              text-lg sm:text-2xl sm:text-xl p-3`,

	box: `h-[40em] w-full sm:w-[50em] rounded-xl 
    bg-ashen flex flex-col`,
};

const Chatbox = () => {
	const spanRef = useRef();

	return (
		<div className={style.box} style={{ backgroundImage: `url(${logo})` }}>
			<div className={style.header}>CHATROOM</div>
			<Messagebox {...{ spanRef }} />
			<Input {...{ spanRef }} />
		</div>
	);
};

export default Chatbox;
