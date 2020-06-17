import React, { createContext,useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState={
    transactions:[
         
     ]
}

export const GlobalContext=createContext(initialState);

export  const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    //Action
    function deleteTransaction(id){
        dispatch({
            type:'Delete_Transaction',
            payload:id
        })
    }
    function AddTransaction(transaction){
        dispatch({
            type:'Add_Transaction',
            payload:transaction
        })
    }

    return(<GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}