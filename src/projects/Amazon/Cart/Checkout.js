import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { AmazonContext } from './../AmazonContext';
import Modal from '@mui/material/Modal';

const Checkout = () => {
  const { state } = useContext(AmazonContext);
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <div className="bg-[#FEFFFE] p-5 h-[15em] basis-1/4 grid items-center">
      <h1 className="text-center text-3xl font-bold">
        TOTAL : <span className="ml-2 font-black">₹{state.totalPrice}</span>
      </h1>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FFD814',
          color: 'black',
          fontSize: '1rem',
          fontWeight: '600',
          '&:hover': { backgroundColor: '#FFD814' },
        }}
        onClick={() => setmodalOpen(true)}>
        Proceed To Buy
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => setmodalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div
          className="w-[40em] -translate-y-2/4 -translate-x-2/4
                     bg-gray-300 border-2 border-gray-700 rounded-lg absolute top-1/2 left-1/2 p-16">
          <h1 className="text-center text-3xl font-bold">
            You may want to avoid buying from this site
          </h1>
        </div>
      </Modal>
    </div>
  );
};
export default Checkout;
