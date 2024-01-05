import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Verification from './components/verify/Verification';
function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/verification' element={<Verification/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
