import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="left_sidebar">
      <div className="logo">
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