import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Homepage from './pages/Homepage';
import Amazon from './projects/Amazon/Amazon';
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
