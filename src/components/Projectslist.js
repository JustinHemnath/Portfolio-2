import { useState, useEffect } from 'react';
import Projectcard from './Projectcard';
import Data from './projects.js';

const Projectslist = () => {
	const [listVisible, setListVisible] = useState(false);

	useEffect(() => {
		const Timeout = setTimeout(() => {
			setListVisible(true);
		}, 500);

		return () => clearTimeout(Timeout);
	});

	if (!listVisible) {
		return (
			<h1 className="text-center text-5xl my-12 sm:mt-16">Loading...</h1>
		);
	}

	return (
		<div className="w-3/4 mx-auto mt-12">
			<h1 className="text-center text-5xl mt-12 sm:mt-16">Projects</h1>
			<div className="mt-2  mb-6 bg-purple-500 w-28 h-1 mx-auto"></div>
			<div
				className="w-[20em] mx-auto gap-4 mb-16 border-2 border-purple-300
							bg-transparent text-purple-300 py-2 px-6 rounded-lg">
				<h1 className="text-center">More projects on the way...</h1>
			</div>
			<div className="flex justify-center gap-x-6 gap-y-12 flex-wrap">
				{Data.map((item) => {
					const { id, title, badges, location } = item;
					return (
						<Projectcard
							key={id}
							{...{ title, badges, location }}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projectslist;
