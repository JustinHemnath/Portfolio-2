import Item from './Item';

import { useContext } from 'react';
import { AmazonContext } from './../AmazonContext';

const CartItems = () => {
  const { state } = useContext(AmazonContext);

  return (
    <div className="bg-[#FEFFFE] p-5 basis-3/4">
      <h1 className="text-4xl font-black mb-10">Shopping Cart</h1>
      <div className="bg-gray-300 w-full h-[1px]"></div>

      <div className="p-4">
        {state.list.map((item) => {
          const { id, title, price, image } = item;
          return <Item key={id} {...{ title, price, image, id }} />;
        })}
      </div>
    </div>
  );
};

export default CartItems;
