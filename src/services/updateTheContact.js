export const updateTheContact = async (id, contactData) =>{
    try{
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/holis/contacts/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(contactData)
        });
    return await response.json();
    } catch(error){
        console.log("error: ", error)
    }
}