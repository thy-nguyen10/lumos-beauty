import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Shop/>}/>
          {/* <Route path = '/kemnen' element = {<Shop}/> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
