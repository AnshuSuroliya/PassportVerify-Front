
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Verification from './components/verify/Verification';
const isAuthenticated = () => {
  
  return localStorage.getItem('jwt') !== null;
};

const PrivateRoute = ({ path,element }) => {
    const navigate=useNavigate();

    if (!isAuthenticated()) {
      navigate('/login');
      return null; 
    }
  
    return <Route exact path="/verification" element={<Verification/>}/>;
};


export default PrivateRoute;
