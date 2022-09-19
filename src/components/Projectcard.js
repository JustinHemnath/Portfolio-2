import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Badge } from 'react-daisyui';

const Projectcard = ({ title, badges, location }) => {
	const [cardBadges, setCardBadges] = useState(badges);
	const navigate = useNavigate();

	useEffect(() => {
		setCardBadges(badges);
	}, [badges]);

	return (
		<Card
			className="bg-sectionclr w-[18em] p-10 text-txtclr rounded-lg border-0
                    sm:w-[22em] sm:h-[16em] cursor-pointer hover:scale-105 
                    active:scale-95 transition duration-300 ease-in-out"
			onClick={() => navigate(location)}>
			<p className="text-4xl text-center"> {title} </p>

			<div className="items-center mt-4 sm:mt-auto">
				<div className="flex justify-center flex-wrap gap-1">
					{cardBadges.map((item) => (
						<Badge
							size="lg"
							key={item}
							className="py-2 text-md bg-transparent text-purple-300 
                        border-1 border-purple-300 rounded-xl">
							{item}
						</Badge>
					))}
				</div>
			</div>
		</Card>
	);
};
export default Projectcard;
