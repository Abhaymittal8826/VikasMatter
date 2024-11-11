import React from 'react';
import Left from './Leftpart/Left';
import Right from './Rightpart/Right';
import Signup from './components/signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { useAuth } from './context/Authprovider';

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex text-white">
              <Left />
              <Right />
            </div>
          ) : (
            <Login />
          )
        }
      />
      <Route path="/login" element={authUser ? <Navigate to= "/" /> : <Login />} 
      />
         
      <Route path="/signup" element={authUser? <Navigate to={"/"}/>: <Signup />} />
    </Routes>
  );
};
 
export default App;
