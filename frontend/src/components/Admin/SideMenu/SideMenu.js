import React from "react";
import "./SideMenu.scss";

import { Icon, Menu } from "semantic-ui-react"

export function SideMenu(props) {
    const { children } = props;
    return (
        <div className="side-menu-admin">
            <MenuLeft/>
            <div className="content">{children}</div>
        </div>
    );
}

function MenuLeft(props) {
    const {} = props;
    return (
        <Menu fixed="left" borderless className="side" vertical>
            <Menu.Item>
                <Icon name="home" /> Pedidos
            </Menu.Item>
        </Menu>
    );
}