import { useReducer, createContext } from 'react';
import data from './data.js';

export const AmazonContext = createContext();

const getTotalPrice = () => {
	let total = 0;

	for (let item of data) {
		total += item.price;
	}

	return total;
};

const AmazonContextProvider = ({ children }) => {
	const initialState = {
		list: data,
		cartCount: 4,
		totalPrice: getTotalPrice(),
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case 'DELETE_ITEM':
				const { id, price, count } = action.payload;
				let grossItemPrice = price * count;
				return {
					...state,
					list: state.list.filter((item) => item.id !== id),
					cartCount: state.cartCount - count,
					totalPrice: state.totalPrice - grossItemPrice,
				};

			case 'INCREASE':
				return {
					...state,
					cartCount: state.cartCount + 1,
					totalPrice: state.totalPrice + action.payload,
				};

			case 'DECREASE':
				if (state.cartCount === 0) return { ...state };
				return {
					...state,
					cartCount: state.cartCount - 1,
					totalPrice: state.totalPrice - action.payload,
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AmazonContext.Provider value={{ state, dispatch }}>
			{children}
		</AmazonContext.Provider>
	);
};

export default AmazonContextProvider;
