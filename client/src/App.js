// import Login from './pages/Login';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home  from "./pages/Home";


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element = {<Login />} />
//           <Route path="/home" element = {<Home />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Register from './pages/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);

  // const PrivateRoute = ({ element, ...rest }) => {
  //   return isLoggedIn ? (
  //     <Route {...rest} element={element} />
  //   ) : (
  //     <Navigate to="/" replace />
  //   );
  // };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
          {/* <Route path="/feed" element = { isLoggedIn? <Feed /> : <Navigate to="/" /> } /> */}
          {/* use above line, use below line for testing css */}
          <Route path="/feed" element={ <Feed />} />
          {/* <PrivateRoute path="/home" element={<Home />} /> */}
          <Route path="/register" element={ <Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
