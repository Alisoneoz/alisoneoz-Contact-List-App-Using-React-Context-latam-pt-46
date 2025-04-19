export const initialStore = () => {
  return {
    contacts: [],
  };
};

export default function storeReducer(store, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };
    case "set_contacts":
      return {
        ...store,
        contacts: action.payload.contacts,
      };
    case "UPDATE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload }
            : contact
        ),
      };
      case "DELETE_CONTACT":
        return{
          ...store,
          contacts: store.contacts.filter(contact => contact.id !== action.payload.id)
      };

    default:
      throw Error("Unknown action.");
  }
}
