import { Button, Modal } from 'react-daisyui';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { useState } from 'react';

const Signin = () => {
	const [dropdown, setdropdown] = useState(false);
	const [modal, setModal] = useState(false);
	const [user, setUser] = useState(null);
	const [name, setName] = useState(null);

	const handleSubmit = () => {
		setModal(false);
		setUser(name);
	};

	return (
		<div
			className="relative"
			onMouseEnter={() => setdropdown(true)}
			onMouseLeave={() => setdropdown(false)}>
			<p>Hello, {user !== null ? user : 'sign in'}</p>
			<p className="font-black flex items-center">
				Account & Lists
				<BsFillCaretDownFill />
			</p>

			{dropdown && (
				<div className=" absolute top-50 p-4 rounded-lg shadow-md bg-white">
					<Button
						className="bg-amber-400 border-0 text-black
           hover:bg-amber-400"
						onClick={() => setModal(true)}>
						Sign In
					</Button>
				</div>
			)}

			<Modal
				open={modal}
				className="py-10 h-[30em] max-w-xl text-black bg-white flex flex-col items-center gap-y-10">
				<Modal.Header>
					<h1 className="text-2xl font-bold text-center">Sign In</h1>
				</Modal.Header>
				<Modal.Body className="flex flex-col gap-16 w-3/4">
					<label className="flex justify-between">
						<span>Enter your Name</span>

						<input
							type="text"
							onChange={(e) => setName(e.target.value)}
							className="border border-gray-900 rounded-sm w-60"
						/>
					</label>

					<label className="flex justify-between">
						<span>Enter your Password</span>

						<input
							type="password"
							className="border border-gray-900 rounded-sm w-60"
							disabled
						/>
					</label>
				</Modal.Body>

				<Modal.Actions>
					<Button
						className="bg-amber-400 border-0 text-black
           						hover:bg-amber-400"
						onClick={handleSubmit}>
						Sign In
					</Button>

					<Button
						className="bg-amber-400 border-0 text-black
            						hover:bg-amber-400"
						onClick={() => setModal(false)}>
						Close
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
	);
};

export default Signin;
