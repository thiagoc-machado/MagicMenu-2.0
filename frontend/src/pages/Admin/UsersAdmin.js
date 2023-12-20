import React, { useEffect } from 'react'
import { HeaderPage, TableUsers } from '../../components/Admin'
import { useUser } from '../../hooks'
import { Loader } from 'semantic-ui-react';

export function UserAdmin() {
  const {loading, users, getUsers} = useUser();

  console.log("Loading--->", loading);
  console.log("Users--->", users);


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <HeaderPage title="usuarios" btnTitle="Nuevo usuario"/>
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}
    </>
  )
}
