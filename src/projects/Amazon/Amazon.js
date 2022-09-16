import AmazonContextProvider from './AmazonContext';
import Cart from './Cart/Cart';
import Navbar from './Navbar/Navbar';

const Amazon = () => {
  return (
    <AmazonContextProvider>
      <div className="h-screen bg-ashen text-white">
        <Navbar />
        <Cart />
      </div>
    </AmazonContextProvider>
  );
};

export default Amazon;
