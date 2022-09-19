import { useState, useEffect } from 'react';
import { Avatar } from '../../styled';
import { Dropdown, MenuItem } from '../../styled';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from './google.png';

const Profile = ({ letters }) => {
	const [dropdown, setDropdown] = useState(false);
	const navigate = useNavigate();

	function Logout() {
		signOut(auth);
		navigate(0);
	}

	return (
		<div className="relative">
			<div
				onClick={() => setDropdown(!dropdown)}
				className="cursor-pointer ml-4">
				{letters ? (
					<Avatar>{letters}</Avatar>
				) : (
					<img src={logo} width="50" />
				)}
			</div>
			{dropdown && (
				<Dropdown
					w="9em"
					h={dropdown ? 'auto' : 0}
					top="3.5em"
					right="0.5em"
					initial={{ opacity: 0.5 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0.5 }}>
					<MenuItem onClick={Logout}>Logout</MenuItem>
				</Dropdown>
			)}
		</div>
	);
};
export default Profile;
