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
  return (
    <div>
      <button onClick={handleAddRandomContact} className='btn btn-sm btn-primary'>Add random contact</button>
      <button onClick={handleSortByPopularity} className='btn btn-sm btn-primary'>Sort by popularity</button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            
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
          </tr>
          
          ))}
          
        </tbody>

      </table>
    </div>
  )
}

export default ContactsList