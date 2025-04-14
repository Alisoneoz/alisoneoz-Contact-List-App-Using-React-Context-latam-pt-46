export const createAgenda = async () => {

 try{
    const response = await fetch("https://playground.4geeks.com/contact/agendas/holis", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      }
    })
    if(!response.ok){
      throw new Error ("Something went wrong")
    }
   
    
 } catch (error ){
    console.log("error:", error)
 }
}