import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Vp'>
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
        <NavLink to="/student">
            Student
          </NavLink>
        </li>
        <li>
        <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
