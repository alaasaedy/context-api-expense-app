import React, { createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';

// Initial state

const transactionsList = [];

// Create context
export const GlobalContext = createContext(transactionsList);

export const GlobalProvider = ({ children }) => {
  const storedTransactions = JSON.parse(
    window.localStorage.getItem('transactions')
  );

  const [transactions, dispatch] = useReducer(
    AppReducer,
    transactionsList,
    () => {
      return storedTransactions ? storedTransactions : transactionsList;
    }
  );

  useEffect(() => {
    window.localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Actions

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
