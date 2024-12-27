const calculateRewardPerTransaction = (customerData, reward1, reward2) => {
    const rewardedData = customerData.map((item) => {
            const { price } = item;
            // Initialize reward if not set in accumulator
            item['reward'] = 0;
            // Reward calculation
            if (price > 50) {
                if (price > 100) {
               
                let greaterThan100 = price - 100;
                item['reward'] += greaterThan100 * reward2;  // Reward for price above 100
                item['reward'] += 50 * reward1;  // Reward for the first 50 (50 to 100)
                } else {
                    // Calculate rewards for amount between 50 and 100
                    let greaterThan50 = price - 50;
                    item['reward'] += greaterThan50 * reward1;
                }
            } else {
                // No reward if the price is below or equal to 50
                item['reward'] += 0;
            }
    
            return item;
              });
        return rewardedData;      

}
export default calculateRewardPerTransaction;