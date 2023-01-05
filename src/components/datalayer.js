import React, { createContext, useContext, useReducer } from "react";

export const data = createContext();
export default function Datalayer({reducer,intialState,children}) {
  return (
    <data.Provider value = {useReducer(reducer,intialState)}>
    {children}
    </data.Provider>
  )
};

export const useDatavalue = () => useContext(data);