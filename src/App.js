import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Homepage from './pages/Homepage';
import Amazon from './projects/Amazon/Amazon';
import Chatapp from './projects/Chat-app/Chatapp';
import Facebook from './projects/Facebook/Facebook';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Homepage />} />
				</Route>
				<Route path="/amazon" element={<Amazon />} />
				<Route path="/facebook" element={<Facebook />} />
				<Route path="/chatapp" element={<Chatapp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
