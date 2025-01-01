import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomLogger from '../CustomLogger';
import { DataContext } from '../context/DataContext';
import { filterLastThreeMonthsData } from '../util/calculateRewardPoints';
const TotalRewards = () => {

  const { customerId } = useParams();

  const { data, isLoading, error } = useContext(DataContext);

  // if (process.env.NODE_ENV === 'development') {
  //   CustomLogger.print(data)
  // }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  let customerData;
  const filterData = filterLastThreeMonthsData(data);
  if (customerId !== undefined) {
    customerData = filterData?.filter(transaction => transaction.customerId === parseInt(customerId));
  } else {
    customerData = filterData;
  }

  const totalRewardPoints = customerData?.reduce((acc, transaction) => {
    const { name } = transaction;
    if (!acc[transaction.customerId]) {
      acc[transaction.customerId] = { rewardPoints: 0, name: name };
    }
    acc[transaction.customerId].rewardPoints += transaction.rewardPoints;

    return acc; // Don't forget to return the accumulator
  }, {});

  // if (process.env.NODE_ENV === 'development') {
  //   CustomLogger.print(totalRewardPoints)
  // }
  return (
    <div className="body_content">
      <div className="user_list_section">
        <div className="user_list_section">

          <div className="top_item">
            <div>
              <h3>User Total Rewards</h3>
            </div>
            <div className="right-side">

              <div className="">
                {customerId !== undefined ? (
                  <div className="menuBoxIcon">
                    <Link to={`/`} className='creator'>Back</Link>
                  </div>
                ) : (
                  <></>
                )}

              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Reward Points</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(totalRewardPoints).length > 0 ? (
            Object.keys(totalRewardPoints).map((customerId) => {
              const item = totalRewardPoints[customerId];
              return (<tr key={customerId}>
                <td>
                  <Link to={`/transaction/${customerId}`}>
                    <div className="general">{item.name}</div>
                  </Link>
                </td>
                <td>
                  <div>{item.rewardPoints}</div>
                </td>
              </tr>);
            })
          ) : (
            <tr>
              <td colSpan={2}>Data Not Found</td>
            </tr>
          )}
        </tbody>

        </table>
      </div>
    </div>
  )
}
export default TotalRewards;