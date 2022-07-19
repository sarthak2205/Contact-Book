import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_ALL, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constant/types"

export const addContact = (contact)=>({
      type:CREATE_CONTACT,
      payload:contact
})
//get Contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
})
//update contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
})
//delete Contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
})
//Select all contacts
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
})
//Clear all Contacts
export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
})
//Delete all Contact
export const deleteAllContact = (payload) => ({
  type: DELETE_ALL,
})


