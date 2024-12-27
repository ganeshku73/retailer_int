import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../data.json'; 
import calculateRewardTotal from '../rewardUtilsTotal';
const TotalRewards = () =>{
  const [userData, setUserData] = useState([])
  const { customerId } = useParams();
  let reward1 = 1;
  let reward2 = 2;
  useEffect(()=>{
        const sortedDataAsc = data.sort((a, b) => {
            const dateA = new Date(a.purchaseDate);
            const dateB = new Date(b.purchaseDate);
            return dateA - dateB; // Ascending order (oldest first)
        });
        const customerData = sortedDataAsc.filter(item => item.customerId == customerId);
        const result =  calculateRewardTotal(customerData,reward1,reward2);
        setUserData(result);
  },[reward1,reward2])


  console.log(userData[customerId])
 
    return (<React.Fragment>
        <div class="body_content">
        <div class="top_item">
          <div class="paragarf">
            <div class="customer">Users Total Rewards</div>
          </div>
        </div>
        <hr />

        <div class="user_list_section">
          <h3>User Total Rewards</h3>
          <table>
            <tr>
              <th>Customer Name</th>
              <th>Reward Points</th>
            </tr>
           {userData[customerId]?(
            
             <tr>
                
                <td>
                <Link to={`/transaction/${customerId}`}>
                    <div class="general">{userData[customerId].name}</div>
                </Link>
                    
                </td>
                <td><div class="general">{userData[customerId].rewards}</div></td>
             </tr>
        ):(
        <tr>
            <td colSpan={2}>Data Not Found</td>
        </tr>
        )}
            
        </table>
        </div>
      </div>
    </React.Fragment>)
}
export default TotalRewards;