import { useState, useEffect } from 'react';
import { calculateRewardPoints } from '../util/calculateRewardPoints';
export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const updatedData = result.map((transaction) => {
          const rewardPoints = calculateRewardPoints(transaction.price);
          return { ...transaction, rewardPoints };
        });

        setData(updatedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // Only re-run the effect if URL changes

  return { data, isLoading, error };
};
