import Amazon from './amazon.webp';
import Locator from './Locator';
import LanguageDropdown from './LanguageDropdown';
import Signin from './Signin';

import { AiOutlineSearch } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="h-16 bg-[#131921] flex items-center">
      <img src={Amazon} alt="amazon" height="100" width="100" />

      <div className="ml-20 flex items-center justify-center gap-10">
        <Locator />
        {/* input */}
        <div className="h-[2.5em] flex">
          <select className="w-12 h-full bg-gray-300 text-gray-800 rounded-l px-1">
            <option defaultValue="selected" className="bg-white">
              All
            </option>
            <option className="bg-white">AMAZON</option>
            <option className="bg-white">Alexa Skills</option>
            <option className="bg-white">Amazon Fashion</option>
            <option className="bg-white">Amazon Fresh</option>
            <option className="bg-white">Amazon Pharmacy</option>
            <option className="bg-white">Amazon Appliances</option>
          </select>

          <input
            type="text"
            className="w-[30em] outline-none focus:ring-4 ring-amber-400 px-1"
          />

          <div className="px-4 bg-orange-400 hover:bg-orange-600 rounded-r cursor-pointer">
            <AiOutlineSearch className="text-3xl pt-2 text-black" />
          </div>

          <LanguageDropdown />

          <Signin />

          <div className="w-1 text-xl relative ml-auto">
            <h1 className="text-amber-500 text-2xl absolute -top-3 left-5">
              0
            </h1>

            <BiCart className="text-5xl absolute top-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
