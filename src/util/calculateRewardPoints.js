import CustomLogger from "../CustomLogger";
const monthNames = {
  "January": 1,
  "February": 2,
  "March": 3,
  "April": 4,
  "May": 5,
  "June": 6,
  "July": 7,
  "August": 8,
  "September": 9,
  "October": 10,
  "November": 11,
  "December": 12
};

/**
 * Calculate reward points.
 * 
 * @param {number} price - The price should be a number either floating or integer.
 * @returns {number} The result of reward point should also be a number.
 * @throws {TypeError} If price is not a number.
 */
export const calculateRewardPoints = (price) => {
  
  if (typeof price !== 'number') {
    throw new TypeError('Price must be numbers');
  }
  let rewardPoints = 0;
  let roundPrice = Math.floor(price);
  if (roundPrice >= 50 && roundPrice <= 100) {
    rewardPoints = roundPrice - 50;
  } else if (roundPrice > 100) {
    const firstSegment = 50;
    const secondSegment = roundPrice - 100;
    rewardPoints = firstSegment + (secondSegment * 2);
  }
  return Math.floor(rewardPoints);
};





export const threeMonthFilteredData = (transactions) => {

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;  // Months are 0-based in JavaScript, so add 1
  const currentYear = currentDate.getFullYear();
  if (process.env.NODE_ENV === 'development') {
    CustomLogger.debug(`current Year ${currentYear}`)
    CustomLogger.debug(`current Month ${currentMonth}`)
  }
  
  
  let threeMonthsAgoMonth = currentMonth - 3;
  let threeMonthsAgoYear = currentYear;
  if (process.env.NODE_ENV === 'development') {
    CustomLogger.debug(`3 month ago Year ${threeMonthsAgoYear}`)
    CustomLogger.debug(`3 month ago Month ${threeMonthsAgoMonth}`)
  }
  
  if (threeMonthsAgoMonth <= 0) {
    threeMonthsAgoYear -= 1;
    threeMonthsAgoMonth += 12;
  }

  return transactions.filter((transaction) => {
    const transactionMonth = monthNames[transaction.month];
    const transactionYear = transaction.year;
    if (process.env.NODE_ENV === 'development') {
      CustomLogger.debug(`Transaction Month ${transactionMonth}`)
      CustomLogger.debug(`Transaction Year ${transactionYear}`)
    }
    
    
    const isYearMatch = transactionYear > threeMonthsAgoYear ||
      (transactionYear === threeMonthsAgoYear && transactionMonth >= threeMonthsAgoMonth);
    const isCurrentYearMatch = transactionYear < currentYear ||
      (transactionYear === currentYear && transactionMonth <= currentMonth);

    // Return true if the transaction is within the last 3 months
    return isYearMatch && isCurrentYearMatch;
  });
}  