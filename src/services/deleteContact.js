export const deleteContact = async (id)=>{
    try{
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/holis/contacts/${id}`, {
            method:"DELETE",
            headers:{
                "content-type": "application-json"

            }
        })
    }
    catch(error){
        console.log("error:", error)
    }
}