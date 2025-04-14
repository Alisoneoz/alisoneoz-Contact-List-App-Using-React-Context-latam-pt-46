const BASE_URL = "https://playground.4geeks.com/contact/agendas"

export const getContacts = async () => {
    try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/holis/contacts",
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },
            }
        )
        const body = await response.json();
        console.log("lo que viene del get -->", body.contacts)
        return body.contacts
    } catch (error) {
        console.log("error: ", error);
        return null
    }

}