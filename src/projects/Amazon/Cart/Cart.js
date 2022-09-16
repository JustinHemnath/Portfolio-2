import CartItems from './CartItems';
import Checkout from './Checkout';

const AmazonCart = () => {
  return (
    <div className="bg-ashen text-[#0E1011] p-5 flex gap-4">
      <CartItems />
      <Checkout />
    </div>
  );
};

export default AmazonCart;
