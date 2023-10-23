import '../App.css';

import HotelList from './HotelList';
import HotelCard from './HotelCard';
import HotelDetails from './HotelCard';
import { Routes, Route, BrowserRouter } from 'react-router-dom'



function App() {



return(
  <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HotelList/>}/>
      <Route path='/hotel/:id' element={<HotelDetails/>}/>
      
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
