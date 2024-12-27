import React, {useState, useEffect } from 'react';
import data from '../data.json'; 
import { Link } from 'react-router-dom';
import calculateRewardMonthly from '../rewardUtilsMonthly';
const MonthlyRewards = () =>{
    const [dataItems, setDataItems] = useState([]);
    const reward1 = 1;
    const reward2 = 2;
    useEffect(()=>{
        const sortedDataAsc = data.sort((a, b) => {
        const dateA = new Date(a.purchaseDate);
        const dateB = new Date(b.purchaseDate);
        return dateA - dateB; // Ascending order (oldest first)
        });
        const result = calculateRewardMonthly(sortedDataAsc, reward1, reward2);
        setDataItems(result);
    },[reward1,reward2])

    console.log(dataItems);


    return (<React.Fragment>
        <div class="body_content">
        <div class="top_item">
          <div class="paragarf">
            <div class="customer">Users Monthly Rewards</div>
          </div>
        </div>
        <hr />

        <div class="user_list_section">
          <h3>User Monthly Rewards</h3>
          <table>
            <tr>
              <th>Customer Id</th>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
              <th>Reward Points</th>
            </tr>
            {
            dataItems.length>0?
            (dataItems.map((item)=>{
                return (
                    <tr>
                        <td><div class="common_text_table">{item.customerId}</div></td>
                        <td>
                            <Link to={`/total-reward/${item.customerId}`}>
                                <div class="general">{item.name}</div>
                            </Link>
                        </td>
                        <td><div class="common_text_table">{item.month}</div></td>
                        <td><div class="common_text_table">{item.year}</div></td>
                        <td><div class="common_text_table">{item.totalReward}</div></td>
                    </tr>
                )
            })
            ):(<tr>
                <td colSpan={5}>Data Not Found</td>
             </tr>)
            
            }
        </table>
        </div>
      </div>
    </React.Fragment>)
}
export default MonthlyRewards;