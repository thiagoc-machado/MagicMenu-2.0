import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableProductAdmin.scss";

export function TableProductAdmin(props) {
    const { products } = props;
    console.log(products);
    return (
        <div>
            <Table className="table-product-admin">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Imagen</Table.HeaderCell>
                        <Table.HeaderCell>Producto</Table.HeaderCell>
                        <Table.HeaderCell>Precios</Table.HeaderCell>
                        <Table.HeaderCell>Categoria</Table.HeaderCell>
                        <Table.HeaderCell>Activo</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {map(products, (product, index) => (
                        <Table.Row key={index}>
                            <Table.Cell width={2}>
                                <Image src={product.image} />
                            </Table.Cell>
                            <Table.Cell>{product.title}</Table.Cell>
                            <Table.Cell>{product.price} €</Table.Cell>
                            <Table.Cell>
                                {product.category_data.title}
                            </Table.Cell>
                            <Table.Cell className="status">
                                {product.active ? (
                                    <Icon name="check" />
                                ) : (
                                    <Icon name="close" />
                                )}
                            </Table.Cell>
                            <Actions product={product}/>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

function Actions(props) {
    return (
        <Table.Cell textAlign="right">
            <Button icon onClick={() => console.log("Editar...")}>
                <Icon name="pencil" />
            </Button>
            <Button icon onClick={() => console.log("Eliminar...")}>
                <Icon negative name="close" />
            </Button>
        </Table.Cell>
    );
}
