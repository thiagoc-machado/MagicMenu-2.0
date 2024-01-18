import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";

import { useProduct } from "../../hooks";
import { HeaderPage, TableProductAdmin } from "../../components/Admin";

export function ProductAdmin() {
    const { products, loading, getProducts } = useProduct();

    useEffect(() => getProducts(), []);

    return (
        <>
            <HeaderPage title="Productos" btnTitle="Nuevo producto" />
            {loading ? (
                <Loader active inline="centered">
                    Cargango...
                </Loader>
            ) : (
                <TableProductAdmin products={products} />
            )}
        </>
    );
}
