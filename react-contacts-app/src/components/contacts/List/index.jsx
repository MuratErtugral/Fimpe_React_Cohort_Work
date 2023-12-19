// ContactList.js
import React, { useEffect, useState } from 'react';

const ContactList = ({ contacts, setContacts }) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    useEffect(() => {
        filterContacts(filterTerm);
    }, [filterTerm]);
    useEffect(() => {
        setFilteredContacts(contacts);
    }, [contacts]);
    const deleteContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
    };

    const filterContacts = (filterTerm) => {
        if (!filterTerm) {
            setFilteredContacts(contacts);
            return;
        } else {
            const filteredContacts = contacts.filter((contact) => {
                return contact.fullName.toLowerCase().includes(filterTerm.toLowerCase()) || contact.phoneNumber.includes(filterTerm);
            });
            setFilteredContacts(filteredContacts);
        }


    };

    

    return (
        <>
            <div className="filter">
                <input
                    type="text"
                    placeholder="Search by name or number"
                    value={filterTerm}
                    onChange={(e) => setFilterTerm(e.target.value)}
                />
            </div>
            <ul className="contact-list">
                {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phoneNumber}</span>
                        <button onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul></>
    );
};

export default ContactList;
