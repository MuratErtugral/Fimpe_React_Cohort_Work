// App.js
import React, { useState } from 'react';
import ContactForm from './Form';
import ContactList from './List';



function Contacts() {
  const [contacts, setContacts] = useState([{ id: 1, fullName: 'John Doe', phoneNumber: '555-555-5555'}]);

  console.log(contacts);


  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };





  return (
    <div className="app">
      <h1>Contact App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default Contacts;
