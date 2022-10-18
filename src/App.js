import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Services from './Pages/Services';
import Notfound from './Pages/Notfound';

function App() {
     return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            {/* <Route path='/payement' element={<Payment />}/> */}
            <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
     )
}

export default App;