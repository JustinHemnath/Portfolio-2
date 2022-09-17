import { useState, useContext } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { AmazonContext } from './../AmazonContext';

const Item = ({ id, title, price, image }) => {
	const [count, setCount] = useState(1);
	const { dispatch } = useContext(AmazonContext);

	const decreaseCount = () => {
		if (count === 1) {
			dispatch({ type: 'DELETE_ITEM', payload: { id, price, count } });
			return;
		}
		dispatch({ type: 'DECREASE', payload: price });
		setCount(count - 1);
	};

	const increaseCount = () => {
		dispatch({ type: 'INCREASE', payload: price });
		setCount(count + 1);
	};

	return (
		<div className="flex h-[15em] border-b select-none">
			<div className="basis-3/12 grid place-items-center">
				<img src={image} width="130" alt="cart item" />
			</div>

			<div className="basis-9/12 flex flex-col justify-around">
				<div className="flex justify-between p-2 font-black">
					<p className="text-3xl underline">{title}</p>
					<p className="text-2xl">₹{price}</p>
				</div>

				<div className="flex justify-between">
					<h1
						className="hover:cursor-pointer font-bold underline text-red-800"
						onClick={() =>
							dispatch({
								type: 'DELETE_ITEM',
								payload: { id, price, count },
							})
						}>
						DELETE
					</h1>

					<div className="flex gap-4">
						<IoIosArrowDown
							className="text-amber-800 text-3xl hover:cursor-pointer"
							onClick={decreaseCount}
						/>

						<p className="font-bold text-xl select-none">{count}</p>

						<IoIosArrowUp
							className="text-amber-800 text-3xl hover:cursor-pointer"
							onClick={increaseCount}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Item;
