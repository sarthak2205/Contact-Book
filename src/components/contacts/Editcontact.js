import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContact, updateContact } from "../../actions/contactaction.js";
import shortid from "shortid";
import { useHistory, useParams } from "react-router";
import { GET_CONTACT } from "../../constant/types.js";
export const Editcontact=() => {

    let {id} = useParams();
   
    let history = useHistory();

    const contact = useSelector(state => state.contact.contact);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const dispatch = useDispatch();
    useEffect(()=> {
        if (contact!=null){
            setname(contact.name);
            setphone(contact.phone);
            setemail(contact.email);
        }
        dispatch(getContact(id))
    },[contact])

    function onUpdateContact(e){
        e.preventDefault();
        const update_contact = Object.assign(contact,{
            name:name,
            phone:phone,
            email:email
        })
        dispatch(updateContact(update_contact));
        history.push("/");
    }

    return (
        <div> 
            <div className="card border-0 shadow">
                <div className="card-header">Add a contact</div>
                <div className="card-body">

                
                    <form onSubmit={(e) => onUpdateContact(e)} >
                        <div className="form-group"> 
                            <input type="text" className="form-control" placeholder="Enter your Name"
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                            />
                        </div>
                        <div className="form-group"> 
                            <input type="text" className="form-control" placeholder="Enter your Phone Number"
                            value={phone}
                            onChange={(e)=>setphone(e.target.value)}
                            />
                        </div>
                        <div className="form-group"> 
                            <input type="text" className="form-control" placeholder="Enter your Email-id"   
                            value={email} 
                            onChange={(e)=>setemail(e.target.value)}
                            />
                        </div>
                            <button className="btn btn-danger" type="Submit">Edit Contact</button>

                    </form>
                </div>
            </div>
        </div>
    )
}