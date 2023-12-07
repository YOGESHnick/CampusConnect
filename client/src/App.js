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
import Home from './pages/Home';

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
          <Route path="/home" element = { isLoggedIn? <Home /> : <Navigate to="/" /> } />
          {/* <PrivateRoute path="/home" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
