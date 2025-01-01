import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { DataContext } from '../context/DataContext';
const Transaction = () => {
    const { customerId } = useParams();
    const { data, isLoading, error } = useContext(DataContext);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    let customerData;
    //alert(customerId)
    if(customerId !== undefined){
         customerData = data?.filter(transaction => transaction.customerId === parseInt(customerId));
    }else{
         customerData = data;
    }
    


    return (
        <div className="body_content">
            <div className="user_list_section">
               
                <div className="top_item">
                    <div>
                        <h3>User Transactions</h3>
                    </div>
                    <div className="right-side">
                        {customerId !== undefined?(
                            <div className="">
                                <div className="menuBoxIcon">
                                    <Link to={`/total-reward/${customerId}`} className="creator">Back</Link>
                                </div>
                            </div>
                        ):(<></>)}
                        
                    </div>
                </div>
                <table>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Customer Name</th>
                        <th>Pucrachage date</th>
                        <th>Product Pucrchage</th>
                        <th>Price</th>
                        <th>Reward Points</th>
                    </tr>
                    {customerData.length > 0 ?
                        (customerData.map((item) => (<tr>
                            <td>{item.transactionId}</td>
                            <td>{item.name}</td>
                            <td>{item.purchaseDate}</td>
                            <td>{item.productPurchased}</td>
                            <td>{item.price}</td>
                            <td>{item.rewardPoints.toFixed(2)}</td>
                        </tr>))
                        ) :
                        (<><tr>
                            <td colSpan={6}>Data Not Found</td>
                        </tr></>)}

                </table>
            </div>
        </div>
    )
}
export default Transaction;