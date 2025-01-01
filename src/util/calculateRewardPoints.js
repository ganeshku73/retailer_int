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








export const filterLastThreeMonthsData = (data) =>{
  const today = new Date();
  const threeMonthsAgo = new Date(today);
  threeMonthsAgo.setMonth(today.getMonth() - 3); // Go back three months

  return data.filter(item => {
    const purchaseDate = new Date(item.purchaseDate);
    return purchaseDate >= threeMonthsAgo && purchaseDate <= today;
  });
}