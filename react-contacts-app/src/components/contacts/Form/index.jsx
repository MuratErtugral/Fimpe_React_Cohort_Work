// ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !phoneNumber) {
      setNameError(true)
        setNumberError(true)
      return;
    }
    if(!fullName){
        setNameError(true)
        return;
        }
    if(!phoneNumber){
        setNumberError(true)
        return;
        }

    const newContact = {
      id: new Date().getTime(),
      fullName,
      phoneNumber,
    };

    addContact(newContact);

    // Reset form fields
    setFullName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${nameError || numberError ? 'has-error' : ''}`}>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => { setFullName(e.target.value); setNameError(false)}}
      />
        <span className="error">{nameError && 'Name is required'}</span>
      <input
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => {setPhoneNumber(e.target.value); setNumberError(false)}}
      />
        <span className="error">{numberError && 'Number is required'}</span>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
