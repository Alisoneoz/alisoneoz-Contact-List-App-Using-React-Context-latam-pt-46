import { useState } from "react"
import { createContact } from "../services/createContact"
import  useGlobalReducer from "../hooks/useGlobalReducer"
import { Link, useNavigate } from "react-router-dom"

export const NewContact = () => {

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const { dispatch }= useGlobalReducer()

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await createContact(newContact);
            dispatch({ type: "ADD_CONTACT", payload: newContact });
            navigate("/");
        } catch(error){
            console.log("hubo un errror al crear el contacto: ", error)
        }
    }

    return (
        <div className="content-fluid p-5">
            <form 
            className="d-flex flex-column gap-3"
            onSubmit={handleSubmit}
            
            >
                <label>Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    value={newContact.name}

                />

                <label>Email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setNewContact({...newContact, email: e.target.value})}
                    value={newContact.email}
                />

                <label>Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setNewContact({...newContact, phone: e.target.value})}
                    value={newContact.phone}
                />

                <label>Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setNewContact({...newContact, address:e.target.value})}
                    value={newContact.address}
                />
                <button className="btn btn-primary container-fluid">Save</button>
            </form>
            <Link to="/" className="text-primary">or get back to contacts</Link>
        </div>
    )
}