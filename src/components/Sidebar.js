import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () =>{
    return (<React.Fragment>
        <div class="left_sidebar">
        <div class="logo">
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="30"
              cy="20"
              r="10"
              stroke="green"
              stroke-width="4"
              fill="yellow"
            />
          </svg>
          <h2>Infosys</h2>
        </div>
        <div class="side_menu">
          <ul class="item_container">
            <li className='active'><Link to="/">Monthly Rewards</Link></li>
          </ul>
          
        </div>
      </div>
    </React.Fragment>);
}
export default Sidebar;