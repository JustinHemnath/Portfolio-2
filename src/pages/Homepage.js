import Projectslist from '../components/Projectslist';
import { BsLinkedin } from 'react-icons/bs';

const Homepage = () => {
	return (
		<div className="max-h-max bg-bgclr pb-40 text-txtclr">
			<div
				className="py-3 bg-purple-900 relative flex flex-col 
							items-center justify-center gap-6">
				<h1
					className="text-3xl sm:text-5xl font-black 
								no-underline sm:underline">
					PORTFOLIO
				</h1>

				<div
					className="px-4 py-2 mx-4 sm:text-lg rounded-lg
								 text-txtclr text-center">
					Visit main portfolio for more projects and details :
					<u className="ml-2 sm:ml-4 font-black">
						www.hemnath-portfolio.netlify.app
					</u>
				</div>

				<div
					className="absolute right-4 -top-12 sm:top-10 items-center
							 	h-full flex flex-col justify-around">
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
