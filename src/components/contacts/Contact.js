import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllContact, deleteAllContact, deleteContact, selectAllContact } from '../../actions/contactaction'
import { Contacts } from './Contacts'

export const Contact = () => {
  const dispatch = useDispatch()
  const [SelectAll, setSelectAll] = useState(false)
  const contacts = useSelector((state)=>state.contact.contacts)
  const Selected_contacts = useSelector((state)=>state.contact.selectedContacts)
  useEffect(()=> {
    if(SelectAll){
      dispatch(selectAllContact(contacts.map(contact => contact.id)))
    }
    else if (!SelectAll){
      dispatch(clearAllContact())
    }
  },[SelectAll])

    console.log(contacts)
    return (
        <div>
        {
        Selected_contacts.length > 0?(<button onClick={()=>{
          dispatch(deleteAllContact())
        }} className="btn btn-danger mb-3">Delete All
        </button>):null
      }
            <table class="table shadow table-striped">
  <thead>
    <tr>
      <th scope="col">
          <div className="custom-control custom-checkbox">
            <input id="selectAll" type="checkbox" 
            value={SelectAll}
            className="custom-control-input"
            onClick={()=>{setSelectAll(!SelectAll)}}
            />
            <label htmlFor="selectAll" className="custom-control-label"/>
          </div>
      </th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {contacts.map(contact=>{
        return(
            <Contacts contact={contact} key={contact.id} SelectAll={SelectAll}/>
        )
    })}
    
  </tbody>
</table>
        </div>
    )
}
