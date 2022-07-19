import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactaction.js";
import shortid from "shortid";
import { useHistory } from "react-router";

export const Addcontact = () => {
    let history = useHistory();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const dispatch = useDispatch();

    function createContact(e){
        e.preventDefault();
        console.log("name:",name);
        console.log("phone:",phone);
        console.log("email:",email);
        const new_contact = {
            id:shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        dispatch(addContact(new_contact))
        history.push("/")
    }
    return (
        <div> 
            <div className="card border-0 shadow">
                <div className="card-header">Add a contact</div>
                <div className="card-body">
                    <form onSubmit={(e)=>createContact(e)}>
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
                            <button className="btn btn-primary" type="Submit">Add to Contact</button>

                    </form>
                </div>
            </div>
        </div>
    )
}