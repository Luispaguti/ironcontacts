import React from 'react'
import contactData from '../../contacts.json'

function ContactsList() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>

        <tbody>
          {contactData.slice(0, 5).map((contact) => (
            <tr>
            <td>
              <img width="100px" src={contact.pictureUrl} alt="pictureUrl" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
          </tr>
          
          ))}
          
        </tbody>

      </table>
    </div>
  )
}

export default ContactsList