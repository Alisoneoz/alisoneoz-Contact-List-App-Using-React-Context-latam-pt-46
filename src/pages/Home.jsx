import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../services/getContacts.js";
import { createAgenda } from "../services/createAgenda.js";
import { Link } from "react-router-dom";
import { deleteContact } from "../services/deleteContact.js"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	console.log("holis este es el estado ➡ ", store.contacts)

	const handleCreateAgenda = async () => {
		const laAgenda = await createAgenda()
	}

	const handleContacts = async () => {
		const contacts = await getContacts();
		dispatch({ type: "set_contacts", payload: { contacts: contacts } })
		console.log("holis este es el estado ➡ ", store.contacts)
	}

	const handleDelete = async (id) =>{
		const contactoABorrar = await deleteContact(id);
		dispatch({
			type: "DELETE_CONTACT",
			payload: id
		})
	}


	useEffect(() => {
		handleCreateAgenda()
		handleContacts()

	}, [])

	return (
		<div className="text-center mt-5 p-5">
			{/* card*/}

			<ul className="list-group">

				{store.contacts.map((contact, index) => {
					const { name } = contact
					return (
						<li className="list-group-item" key={index}>

							<div className="card mb-3 m-auto border-0">
								<div className="row g-0 d-flex justify-content-between">
									<div className="col-md-6 d-flex gap-5">
										<div className="">
											<img src="https://avatar.iran.liara.run/public/boy" style={{ width: "200px", height: "200px" }} className="rounded-circle" alt="..." />
										</div>
										<div className="">
											<div className="card-body text-secondary">
												<h5 className="card-title text-start">

													{contact.name}
												</h5>
												<h5 className="card-title text-start">
													<i className="fa-solid fa-location-dot me-2"></i>
													{contact.address}
												</h5>
												<h6 className="card-title text-start">
													<i className="fa-solid fa-phone me-2"></i>
													{contact.phone}
												</h6>
												<p className="card-text text-start">
													<i className="fa-solid fa-envelope me-2"></i>
													{contact.email}
												</p>

											</div>
										</div>
									</div>

									<div className="col-md-2 ">
										<div className="card-body d-flex justify-content-around">
											<Link to={`/edit/${contact.id}`} className="border-0 bg-light">
												<i className="fa-solid fa-pen"></i>
											</Link>
											<button 
											onClick={()=> handleDelete(contact.id)}
											className="border-0 bg-light"><i className="fa-solid fa-trash"></i></button>
										</div>
									</div>
								</div>
							</div>
						</li>
					)
				})}



			</ul>

			<div className="m-auto">

			</div>





		</div>
	);
}; 