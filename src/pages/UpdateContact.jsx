import { useEffect, useState } from "react"
import { createContact } from "../services/createContact"
import  useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { updateTheContact } from "../services/updateTheContact";

export const UpdateContact = () => {

    const { contactId } = useParams();
    const { store,dispatch }= useGlobalReducer();
    const navigate = useNavigate();

    const [updateContact, setUpdateContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    useEffect(()=>{
        const contactToEdit = store.contacts.find( contact => contact.id === contactId)
        if (contactToEdit){
            setUpdateContact({
                name: contactToEdit.name,
                email: contactToEdit.email,
                phone: contactToEdit.phone,
                address: contactToEdit.address
            })
        }
    }, [contactId])
    

    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await updateTheContact(contactId, updateContact);
            dispatch({ type: "UPDATE_CONTACT", 
                payload: {
                    id:contactId,
                    ...updateContact
            }});
            navigate("/");
        } catch(error){
            console.log("hubo un errror al crear el contacto: ", error)
        }
    }

    return (
        <div className="">
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
                    onChange={(e) => setUpdateContact({ ...updateContact, name: e.target.value })}
                    value={updateContact.name}

                />

                <label>Email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setUpdateContact({...updateContact, email: e.target.value})}
                    value={updateContact.email}
                />

                <label>Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setUpdateContact({...updateContact, phone: e.target.value})}
                    value={updateContact.phone}
                />

                <label>Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setUpdateContact({...updateContact, address:e.target.value})}
                    value={updateContact.address}
                />
                <button className="btn btn-primary container-fluid">Save</button>
            </form>
        </div>
    )
}