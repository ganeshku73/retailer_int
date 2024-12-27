const calculateRewardTotal = (customerData, reward1, reward2) => {
    const groupedData = customerData.reduce((acc, item) => {
        const { customerId, name, price } = item;
            // Check if customer exists in the accumulator
            if (!acc[customerId]) {
                acc[customerId] = {
                name,
                rewards: 0
                };
            }

            // Reward calculation based on price
            if (price > 50) {
                if (price > 100) {
            let greaterThan100 = price - 100;
            acc[customerId].rewards += greaterThan100 * reward2; // Rewards for price above 100
            acc[customerId].rewards += 50 * reward1; // Rewards for the first 50 (50 to 100)
            } else {
            let greaterThan50 = price - 50;
            acc[customerId].rewards += greaterThan50 * reward1; // Rewards for price between 50 and 100
            }
        } else {
            acc[customerId].rewards += 0; // No rewards if price <= 50
        }
        return acc;
            
}, {});
return groupedData;
}

export default calculateRewardTotal;