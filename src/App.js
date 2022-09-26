import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Homepage from './pages/Homepage';
import Amazon from './projects/Amazon/Amazon';
import Whatsapp from './projects/Whatsapp/Whatsapp';
import Ecommerce from './projects/Ecommerce/Ecommerce';
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
                <Route path="/whatsapp" element={<Whatsapp />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
