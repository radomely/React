import React from 'react'

const UserTable = ({users}) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length
        ? (users.map(el => (
          <tr key={el.id}>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))): (
            <tr>
                 <td colSpan={3}>No users</td>
            </tr>
        )}
    </tbody>
  </table>
)

export default UserTable