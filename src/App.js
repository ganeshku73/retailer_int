import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MonthlyRewards from './pages/MonthyReward';
import TotalRewards from './pages/TotalReward';
import Transaction from './pages/Transactions';
function App() {
  return (
    <Router>
      <div class="container">
        <Sidebar/>

         
            <Routes>
              <Route path="/" element={<MonthlyRewards />} />
              <Route path="/total-reward/:customerId" element={<TotalRewards />} />
              <Route path="/transaction/:customerId" element={<Transaction />} />
            </Routes>
          
        
      </div>
    
      </Router>
  );
}

export default App;
