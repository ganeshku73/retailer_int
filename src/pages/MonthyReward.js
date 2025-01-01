import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import CustomLogger from '../CustomLogger';
const MonthlyRewards = () => {

  const { data, isLoading, error } = useContext(DataContext);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (process.env.NODE_ENV === 'development') {
    CustomLogger.print(data)
  }
  
  const groupedByCustomer = data?.reduce((acc, transaction) => {
    const { customerId, month, year, rewardPoints, name } = transaction;
    const customerKey = customerId;
    if (!acc[customerKey]) {
      acc[customerKey] = [];
    }


    const monthYearKey = `${year}-${month}`;


    let monthYearData = acc[customerKey].find(item => item.yearMonth === monthYearKey);

    if (!monthYearData) {
      // If the month-year doesn't exist, create a new entry
      monthYearData = {
        yearMonth: monthYearKey,
        rewardPoints: 0,
        useInfo: []
      };
      acc[customerKey].push(monthYearData);
    }

    // Accumulate reward points for the month-year entry
    monthYearData.rewardPoints += rewardPoints;

    // Optionally, you can also store each transaction if needed for further details
    monthYearData.useInfo.push({ name });

    return acc;
  }, {});



  const groupedRewardPoints = Object.keys(groupedByCustomer).map(customerId => ({
    customerId,
    rewardPointsByMonth: groupedByCustomer[customerId],
  }));
  CustomLogger.debug(groupedRewardPoints)
  

  
  return (
    <div className="body_content">
      <div className="user_list_section">

        <div className="top_item">
          <div>
            <h3>User Monthly Rewards</h3>
          </div>
          <div className="right-side">

            <div className="filter">

            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Name</th>
              <th>Year-Month</th>
              <th>Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {groupedRewardPoints.length > 0 ? (
              groupedRewardPoints.map((item) => {
                return (
                  <>
                    {item.rewardPointsByMonth.map((val, ind) => (
                      <tr key={`${item.customerId}-${val.yearMonth}`}>

                        <td>{item.customerId}</td>
                        <td><Link to={`/total-reward/${item.customerId}`} className="general" style={{ textDecoration: 'none' }}>{val.useInfo[0].name}</Link></td>
                        <td>{val.yearMonth}</td>
                        <td>{val.rewardPoints.toFixed(2)}</td>
                      </tr>
                    ))}
                  </>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  )
}
export default MonthlyRewards;