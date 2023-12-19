import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <input type="text" />
        </div>
        <div className="right">
            <a href="/feed">Home</a>
            <a href="/feed">Article</a>
            <a href="/feed">Messaging</a>
            <a href="/feed">Profile</a>
        </div>
    </div>
  );
}

export default Navbar;
