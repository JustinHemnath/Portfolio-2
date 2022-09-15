import { useState } from 'react';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Radio,
} from '@material-tailwind/react';
import { BsFillCaretDownFill } from 'react-icons/bs';

const LanguageDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="mx-2 cursor-pointer"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}>
      <Menu open={menuOpen ? true : false}>
        <MenuHandler>
          <div className="bg-transparent p-2 flex items-center">
            EN
            <BsFillCaretDownFill className="text-sm ml-1" />
          </div>
        </MenuHandler>

        <MenuList>
          <MenuItem>
            <Radio name="type" label="English-EN" color="amber" />
          </MenuItem>
          <MenuItem>
            <Radio name="type" label="Tamil-TN" color="amber" />
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
export default LanguageDropdown;
