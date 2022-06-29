import React, {createContext,useReducer} from'react';
import {initialState, userReducer} from '../reducers/UsersReducers.js';


export  const UserContext= createContext();

export default({children})=> {
  const [state, dispatch] = useReducer(userReducer,initialState);

  return (
    <UserContext.Provider value={{state,dispatch}}>
      {children}
    </UserContext.Provider>
  )
}