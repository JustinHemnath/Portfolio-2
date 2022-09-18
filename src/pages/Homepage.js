import { Button } from 'react-daisyui';
import Projectslist from '../components/Projectslist';
import { BsLinkedin } from 'react-icons/bs';

const Homepage = () => {
	return (
		<div className="max-h-max bg-bgclr pb-40 text-txtclr">
			<div
				className="h-40 bg-purple-900 relative flex flex-col items-center 
							justify-center gap-6">
				<h1 className="text-5xl font-black">PORTFOLIO</h1>
				<a
					href="www.hemnath-portfolio.netlify.app"
					target="_blank"
					rel="noreferrer">
					<Button
						className="w-72 text-black bg-amber-300
					 			hover:bg-amber-300">
						Visit Main Portfolio
					</Button>
				</a>
				<div
					className="absolute right-4 top-10 items-center h-full 
								flex flex-col justify-around">
					<div
						className="text-4xl hover:text-bgclr cursor-pointer 
								transition-color duration-300 ">
						<a
							href="https://www.linkedin.com/in/hemnath-balasubramanian-0a23a5185/"
							target="_blank"
							rel="noreferrer">
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>
			<Projectslist />
		</div>
	);
};

export default Homepage;
