import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../data.json'; 
import calculateRewardPerTransaction from '../rewardUtilsTransaction';
const Transaction = () =>{
   
    const [dataItems, setDataItems] = useState([]);
    const { customerId } = useParams();
    
    useEffect(()=>{
        let reward1= 1;
        let reward2 =2;
        const customerData = data.filter(item => item.customerId == customerId);
        const result =calculateRewardPerTransaction(customerData,reward1,reward2);
        const sortedDataAsc = result.sort((a, b) => {
            const dateA = new Date(a.purchaseDate);
            const dateB = new Date(b.purchaseDate);
            return dateA - dateB; // Ascending order (oldest first)
        });
        setDataItems(sortedDataAsc);
    },[])

    console.log(dataItems);


    return (<React.Fragment>
            <div class="body_content">
                <div class="top_item">
                <div class="paragarf">
                    <div class="customer">Users Transactions</div>
                </div>
                </div>
                <hr />

                <div class="user_list_section">
                <h3>User Transactions</h3>
                <table>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Customer Name</th>
                        <th>Pucrachage date</th>
                        <th>Product Pucrchage</th>
                        <th>Price</th>
                        <th>Reward Points</th>
                    </tr>
                    {dataItems.length>0 ?
                    (dataItems.map((item)=>(<tr>
                        <td>{item.transactionId}</td>
                        <td>{item.name}</td>
                        <td>{item.purchaseDate}</td>
                        <td>{item.productPurchased}</td>
                        <td>{item.price}</td>
                        <td>{item.reward}</td>
                    </tr>))
                    ):
                    (<><tr>
                        <td colSpan={6}>Data Not Found</td>
                    </tr></>)}
                    
                </table>
                </div>
            </div>
    </React.Fragment>)
}
export default Transaction;