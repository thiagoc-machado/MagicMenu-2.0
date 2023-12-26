import React, { useEffect, useState } from "react";
import {
    HeaderPage,
    TableUsers,
    AddEditUserForm,
} from "../../components/Admin";
import { useUser } from "../../hooks";
import { ModalBasic } from "../../components/Common/";
import { Loader } from "semantic-ui-react";

export function UserAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);
    const [titleModel, setTitleModal] = useState(null);
    const [refetch, setRefetch] = useState(false);

    const { loading, users, getUsers, deleteUser } = useUser();
    useEffect(() => {
        getUsers();
    }, [refetch]);

    const openCloseModal = () => setShowModal((prev) => !prev);
    const onRefetch = () => setRefetch((prev) => !prev);

    const addUser = () => {
        setTitleModal("Crear nuevo usuario");
        setContentModal(
            <AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />
        );
        openCloseModal();
    };

    const updateUser = (data) => {
        setTitleModal("Actualizar usuario");
        setContentModal(
            <AddEditUserForm
                onClose={openCloseModal}
                onRefetch={onRefetch}
                user={data}
            />
        );
        openCloseModal();
    };

    const onDeleteUser = async (data) => {
        const result = window.confirm(`¿Eliminar usuario? ${data.email}`);

        if (result) {
          try{
            await deleteUser(data.id);
            onRefetch();
          }
          catch(error){
            console.log(error);
          }
        }
    };

    return (
        <>
            <HeaderPage
                title="usuarios"
                btnTitle="Nuevo usuario"
                btnClick={addUser}
            />
            {loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableUsers users={users} updateUser={updateUser} onDeleteUser={onDeleteUser} />
            )}
            <ModalBasic
                show={showModal}
                onClose={openCloseModal}
                title={titleModel}
                children={contentModal}
            />
        </>
    );
}
