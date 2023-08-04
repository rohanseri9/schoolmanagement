import React from "react";
import { Link } from "react-router-dom";
import home from '../assets/home.png';
import elearning from '../assets/elearning.png';
import classroom from '../assets/classroom.png';
import children from '../assets/children.png';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <ul>
        <li className="mb-4">
          <Link to="/">
            <img src={home} alt="Home" className="h-6 mr-2 inline" />
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/Course">
            <img src={elearning} alt="elearning" className="h-6 mr-2 inline" />
            Course Management
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/Faculty">
            <img src={classroom} alt="classroom" className="h-6 mr-2 inline" />
            faculty Management
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/employees">
            <img src={children} alt="children" className="h-6 mr-2 inline" />
            school Management
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar
