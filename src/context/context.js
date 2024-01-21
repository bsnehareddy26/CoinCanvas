import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';


const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":500,"category":"Shopping","type":"Expense","date":"2023-10-25","id":"28b21940-f534-4504-8bcc-044007308960"},{"amount":500,"category":"Investments","type":"Income","date":"2023-10-12","id":"6d3f6651-6833-497a-aa21-28054e8f11ef"}] ;
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    //Action creators
    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION',payload: id});
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount),0);
    return (
        <ExpenseTrackerContext.Provider value = {{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}