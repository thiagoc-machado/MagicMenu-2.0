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
    const [titleModel, setTitleModel] = useState(null);

    const { loading, users, getUsers } = useUser();
    useEffect(() => {
        getUsers();
    }, []);

    const openCloseModal = () => setShowModal((prev) => !prev);

    const addUser = () => {
        setTitleModel("Crear nuevo usuario");
        setContentModal(<AddEditUserForm/>);
        openCloseModal();
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
                <TableUsers users={users} />
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
