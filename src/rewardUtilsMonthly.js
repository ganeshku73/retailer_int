const calculateRewardMonthly = (customerData, reward1, reward2) => {
        const grouped = customerData.reduce((acc, item) => {
            const { customerId, name, month, price } = item;
            // Check if customerId exists in the accumulator
            if (!acc[customerId]) {
              acc[customerId] = {
                name,
                rewards: {}
              };
            }
      
            // Initialize the month if not exists
            if (!acc[customerId].rewards[month]) {
              acc[customerId].rewards[month] = 0;
            }
      
            // Add the price to the total for that customer and month
            
            if(price>50){
              if(price>100){
                let greaterThan100 = price - 100;
                 acc[customerId].rewards[month] += greaterThan100*reward2;
                 acc[customerId].rewards[month] += 50*reward1;
                }else{
                 let greaterThan50 = price - 50;
                 acc[customerId].rewards[month] += greaterThan50*reward1;
               }
            }else{
              acc[customerId].rewards[month] += 0;
            }
            return acc;
          }, {});
          
          const result = Object.keys(grouped).map(customerId => {
            const customer = grouped[customerId];
            return Object.keys(customer.rewards).map(month => ({
              customerId,
              name: customer.name,
              month,
              year: 2024, // Assuming year is consistent across all records
              totalReward: customer.rewards[month]
            }));
          }).flat();

          return result;

}
export default calculateRewardMonthly;