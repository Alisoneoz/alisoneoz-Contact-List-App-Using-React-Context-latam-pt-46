export const initialStore=()=>{
  return{
    contacts:[]
  }
}

export default function storeReducer(store, action) {
  switch(action.type){
      case "ADD_CONTACT":
        return  {
          ...store,
          contacts:[...store.contacts, action.payload]
        }
      ;
      case 'set_contacts':
        return{
        ...store,
        contacts: action.payload.contacts
        }
    default:
      throw Error('Unknown action.');
  }    
}
