import React from "react";
import "./SideMenu.scss";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";

export function SideMenu(props) {
    const { pathname } = useLocation();
    const { children } = props;
    return (
        <div className="side-menu-admin">
            <MenuLeft pathname={pathname} />
            <div className="content">{children}</div>
        </div>
    );
}

function MenuLeft(props) {
    const { pathname } = props;
    const { auth } = useAuth();
    return (
        <Menu fixed="left" borderless className="side" vertical>
            <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
                <Icon name="home" /> Pedidos
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={"/admin/tables"}
                active={pathname === "/admin/tables"}
            >
                <Icon name="table" /> Mesas
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={"/admin/payments-history"}
                active={pathname === "/admin/payments-history"}
            >
                <Icon name="history" /> Historial de pagos
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={"/admin/categories"}
                active={pathname === "/admin/categories"}
            >
                <Icon name="folder" /> Categorías
            </Menu.Item>
            <Menu.Item
                as={Link}
                to={"/admin/products"}
                active={pathname === "/admin/products"}
            >

                <Icon name="cart" /> Productos
            </Menu.Item>
            {auth.me?.is_superuser && (
                <Menu.Item
                    as={Link}
                    to={"/admin/users"}
                    active={pathname === "/admin/users"}
                >
                <Icon name="users" /> Usuários
            </Menu.Item>
            )}
        </Menu>
    );
}
