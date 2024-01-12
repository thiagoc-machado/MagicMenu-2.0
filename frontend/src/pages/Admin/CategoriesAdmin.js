import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import {
    HeaderPage,
    TableCategoryAdmin,
    AddEditCategoryForm,
} from "../../components/Admin";
import { useCategory } from "../../hooks";
import { ModalBasic } from "../../components/Common";
import { initial } from "lodash";

export function CategoriesAdmin() {
    const [showModal, SetShowModal] = useState(false);
    const [titleModal, SetTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const { categories, error, Loading, getCategories } = useCategory();
    const [refetch, setRefetch] = useState(false);

    useEffect(() => getCategories(), [refetch]);

    const openCloseModal = () => SetShowModal((prev) => !prev);
    const onRefetch = () => setRefetch((prev) => !prev);

    const addCategory = () => {
        SetTitleModal("Nueva categoria");
        setContentModal(
            <AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} />
        );
        openCloseModal();
    };

    return (
        <>
            <HeaderPage
                title="Categories"
                btnTitle="Nueva categoria"
                btnClick={addCategory}
            />
            {Loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableCategoryAdmin categories={categories} />
            )}
            <ModalBasic
                show={showModal}
                onClose={openCloseModal}
                title={titleModal}
                children={contentModal}
            />
        </>
    );
}
