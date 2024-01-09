import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableCategoryAdmin } from "../../components/Admin";
import { useCategory } from "../../hooks";

export function CategoriesAdmin() {
    const { categories, error, Loading, getCategories } = useCategory();
    console.log(categories);
    useEffect(() => getCategories(), []);
    return (
        <div>
            <HeaderPage title="Categories" btnTitle="Nueva categoria" />
            {Loading ? (
                <Loader active inline="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableCategoryAdmin
                    categories={categories}
                />
            )}
        </div>
    );
}
