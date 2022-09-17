import { useState } from 'react';
import { Button, Radio } from 'react-daisyui';
import { BsFillCaretDownFill } from 'react-icons/bs';

const LanguageDropdown = () => {
	const [dropdown, setdropdown] = useState(false);

	return (
		<div
			className="mx-2 cursor-pointer"
			onMouseEnter={() => setdropdown(true)}
			onMouseLeave={() => setdropdown(false)}>
			<Button className="border-0 relative bg-transparent hover:bg-transparent">
				<span>EN</span> <BsFillCaretDownFill className="ml-1" />
			</Button>
			{dropdown && (
				<div
					className="absolute flex flex-col gap-3 text-black bg-white w-36 
                        px-4 py-2 rounded-lg shadow-md">
					<label>
						<Radio
							size="sm"
							className="checked:bg-orange-300 mr-2"
							checked
						/>
						<span>EN - English</span>
					</label>
					<label>
						<Radio
							size="sm"
							className="checked:bg-orange-300 mr-2"
						/>
						<span>TN - Tamil</span>
					</label>
				</div>
			)}
		</div>
	);
};
export default LanguageDropdown;
