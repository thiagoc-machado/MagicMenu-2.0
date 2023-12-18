import React, { useEffect } from 'react'
import { useUser } from '../../../hooks'

export function UserAdmin() {
  const {loading, users, getUsers} = useUser();

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>UsersAdmin</h1>
    </div>
  )
}
