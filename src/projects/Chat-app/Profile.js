import { useState } from 'react';
import { Avatar } from '../../styled';
import { Dropdown, MenuItem } from '../../styled';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Profile = ({ letters }) => {
	const [dropdown, setDropdown] = useState(false);

	return (
		<div className="relative">
			<Avatar onClick={() => setDropdown(!dropdown)}>{letters}</Avatar>
			{dropdown && (
				<Dropdown w="9em" top="3.5em" right="0.5em">
					<MenuItem>Profile</MenuItem>
					<MenuItem onClick={() => signOut(auth)}>Logout</MenuItem>
					<MenuItem>View</MenuItem>
				</Dropdown>
			)}
		</div>
	);
};
export default Profile;
