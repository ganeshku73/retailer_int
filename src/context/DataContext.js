import React, { createContext } from 'react';
import { useFetchData } from '../hooks/useFetchData';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const { data, isLoading, error } = useFetchData('/data.json');


  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};
