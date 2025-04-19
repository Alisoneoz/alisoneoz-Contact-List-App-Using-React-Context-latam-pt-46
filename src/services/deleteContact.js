export const deleteContact = async (id)=>{
    try{
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/holis/contacts/${id}`, {
            method:"DELETE",
            headers:{
                "Content-Type": "application-json"

            }
        });
        return await response.json();
    }
    catch(error){
        console.log("error:", error)
    }
}