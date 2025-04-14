import { useState } from "react"

export const NewContact = () => {

    const [newContact, setNewContact] = useState({})

    return (
        <div className="">
            <form 
            className="d-flex flex-column gap-3"
            onSubmit={(e)=>{
                e.preventDefault()
            }}
            
            >
                <label>Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=> setNewContact({...newContact, fullName: {e.target.value} })}
                    value={newContact.fullName}
                />

                <label>Email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />

                <label>Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />

                <label>Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <button className="btn btn-primary container-fluid">Save</button>
            </form>
        </div>
    )
}