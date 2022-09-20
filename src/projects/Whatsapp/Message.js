const style = {
	name: `text-end text-md sm:text-lg font-black`,
	message: `mt-6 sm:mt-4`,
	sent: `ml-auto`,
	received: `mr-auto`,
};

const Message = ({ messages }) => {
	if (messages.length === 0) {
		return null;
	}
	return (
		<div className="w-3/4 m-3 p-4 bg-white rounded-xl shadow-md">
			<h1 className={style.name}>{messages.name}</h1>
			<p className={style.message}>{messages.message}</p>
		</div>
	);
};

export default Message;
