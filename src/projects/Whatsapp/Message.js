const style = {
	name: `text-end text-md sm:text-lg font-black`,
	message: `mt-6 sm:mt-4`,
	sent: `ml-auto`,
	received: `mr-auto`,
};

const Message = () => {
	return (
		<div className="w-3/4 m-3 p-4 bg-white rounded-xl shadow-md">
			<h1 className={style.name}>HEMNATH BALASUBRAMANIAN</h1>
			<p className={style.message}>MESSAGE</p>
		</div>
	);
};

export default Message;
