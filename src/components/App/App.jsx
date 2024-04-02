import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { nanoid } from 'nanoid'

function App() {


const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('all-contacts'))||[ 
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);

 useEffect(() => {
    localStorage.setItem('all-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredInputValue = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  
  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
};

const deleteContact = (id) => {
  setContacts(contacts.filter(contact => contact.id !== id));
};

  return (
    <div>
      <h1 className="text">Phonebook</h1>
      <ContactForm 
      addContact = {addContact}/>
      <SearchBox 
      inputValue = {inputValue} 
      handleChange = {handleChange}/>
      <ContactList contacts={contacts}
      filteredContacts = {filteredInputValue} 
      onDelete = {deleteContact}/>
    </div>
  );
}

export default App;