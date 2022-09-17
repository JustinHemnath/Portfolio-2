import { Button } from 'react-daisyui';
import { useContext } from 'react';
import { AmazonContext } from './../AmazonContext';

const Checkout = () => {
	const { state } = useContext(AmazonContext);

	return (
		<div className="sticky top-4 bg-[#FEFFFE] p-5 h-[15em] basis-1/4 grid items-center">
			<h1 className="text-center text-3xl font-bold">
				TOTAL :
				<span className="ml-2 font-black">₹{state.totalPrice}</span>
			</h1>

			<Button
				className="bg-amber-400 border-0 text-black
				hover:bg-amber-400">
				Proceed To Buy
			</Button>
		</div>
	);
};
export default Checkout;
