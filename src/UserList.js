import { useState, useEffect } from 'react'
import axios from 'axios'

function UserList() {
  const [listOfUser, setListOfUser] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data)
      })
  }, [])

  if (listOfUser.length === 0) {
    return <p className="loading">Chargement des utilisateurs...</p>
  }

  return (
    <div className="user-grid">
      {listOfUser.map(user => (
        <div className="user-card" key={user.id}>
          <div className="user-avatar">
            {user.name.charAt(0)}
          </div>
          <p className="user-name">{user.name}</p>
          <p className="user-username">@{user.username}</p>
          <div className="user-info">
            <span>✉️ {user.email}</span>
            <span>📞 {user.phone}</span>
            <span>🌐 {user.website}</span>
            <span>🏢 {user.company.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList