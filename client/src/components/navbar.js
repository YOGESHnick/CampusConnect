import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <input type="text" />
        </div>
        <div className="right">
            <a href="#">Home</a>
            <a href="#">Article</a>
            <a href="#">Messaging</a>
            <a href="#">Profile</a>
        </div>
    </div>
  );
}

export default Navbar;
