import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { useState } from 'react';

const Signin = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);

  const handleSubmit = () => {
    setModal(false);
    setUser(name);
  };

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}>
      <Menu open={menuOpen ? true : false}>
        <MenuHandler>
          <div>
            <p>Hello, {user !== null ? user : 'sign in'}</p>
            <p className="font-black flex items-center">
              Account & Lists
              <BsFillCaretDownFill />
            </p>
          </div>
        </MenuHandler>

        <MenuList>
          <Button
            color="amber"
            className="outline-none ml-6"
            onClick={() => setModal(true)}>
            Sign In
          </Button>
        </MenuList>
      </Menu>

      {/* Modal */}
      <Dialog
        open={modal}
        size="md"
        className="py-10 h-[30em] flex flex-col items-center gap-y-10">
        <DialogHeader>
          <h1>Sign In</h1>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-16 w-3/4">
          <label htmlFor="name" className="flex justify-between">
            <span>Enter your Name</span>

            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-900 rounded-sm w-60"
            />
          </label>

          <label htmlFor="password" className="flex justify-between">
            <span>Enter your Password</span>

            <input
              type="password"
              id="password"
              value="password"
              className="border border-gray-900 rounded-sm w-60"
              disabled
            />
          </label>
        </DialogBody>

        <DialogFooter>
          <Button
            color="amber"
            className="outline-none ml-6"
            onClick={handleSubmit}>
            Sign In
          </Button>

          <Button
            color="amber"
            className="outline-none ml-6"
            onClick={() => setModal(false)}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Signin;
