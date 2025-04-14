export const createContact = async(contact) =>{
    try{
        const response = await fetch("https://playground.4geeks.com/contact/agendas/holis/contacts", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: contact.fullName,
                email: contact.email,
                phone: contact.phone,
                address: contact.address,
            })
            
        }
    )
    if(!response.ok){
        throw new Error("algo salio mal al crear el contacto")
    }
    } catch(error){
        console.log("error:", error)
    }
}