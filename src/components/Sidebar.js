import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="left_sidebar">
      <div className="logo">
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="30"
            cy="20"
            r="10"
            stroke="green"
            strokeWidth="4"
            fill="yellow"
          />
        </svg>
        <h2>Infosys</h2>
      </div>
      <div className="side_menu">
        <ul className="item_container">
          <li className='active'><Link to="/">Monthly Rewards</Link></li>
          <li className='active'><Link to="/total-reward">Total Rewards</Link></li>
          <li className='active'><Link to="/transaction">All transactions</Link></li>
        </ul>

      </div>
    </div>
  );
}
export default Sidebar;