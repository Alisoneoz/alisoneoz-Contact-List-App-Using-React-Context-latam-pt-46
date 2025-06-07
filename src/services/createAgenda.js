export const createAgenda = async () => {
  try {
    const checkResponse = await fetch(
      "https://playground.4geeks.com/contact/agendas/holis"
    );

    if (checkResponse.ok) {
      const agenda = await checkResponse.json();

      if (agenda) {
        console.log("La agenda ya existe!!:", agenda);
        return;
      }
    }
    const response = await fetch(
      "https://playground.4geeks.com/contact/agendas/holis",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Oh noo, algo salio mal an tratar de crear al agendaa");
    }

    console.log("Agenda creada con éxito.");
  } catch (error) {
    console.log("error:", error);
  }
};
