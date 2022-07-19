import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers"
export const addContact = (contact)=>{
  return{
    type:"CREATE_CONTACT",
    payload:contact
  }
}

const store = createStore(rootReducer,composeWithDevTools());

export default store; 