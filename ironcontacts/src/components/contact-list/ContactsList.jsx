import React, { useState } from 'react'
import contactsData from '../../contacts.json'

function ContactsList() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 10));

  const handleAddRandomContact = () => {
    const random =
    contactsData[Math.floor(contactsData.length * Math.random())];

    setContacts([random, ...contacts]);


  };

  
  const handleSortByPopularity = () => {
    setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
  }

  //para borrar tengo que cambiar el estado, si quiero que se repinte el estado otra vez tengo que cambiar ele stado, el estado tiene que ser 
  // el mismo array que era antes sin el elemento que quiero borrar 

  const handleDelete = (contact) => {
    setContacts(contacts.filter((c) => contact !== c));
  }
  return (
    <div>
      <button onClick={handleAddRandomContact} className='btn btn-sm btn-primary me-2'>Add random contact</button>
      <button onClick={handleSortByPopularity} className='btn btn-sm btn-warning'>Sort by popularity</button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Actions</th>
            
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
            <td>
              <img width="100px" src={contact.pictureUrl} alt="pictureUrl" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar && "🏆"}</td>
            <td>
              <button onClick={ () => handleDelete(contact)} className='btn btn-danger btn-sm'>Delete</button>
            </td>
          </tr>
          
          ))}
          
        </tbody>

      </table>
    </div>
  )
}

export default ContactsList