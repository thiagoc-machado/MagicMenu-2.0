import React from "react";
import "./AdminLayout.scss";
import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hooks";

export function AdminLayout(props) {
    const { children } = props;
    const { auth } = useAuth();

    if (!auth) return <LoginAdmin />;
    return (
        <div>
            <p>Admin Layout</p>
            {children}
        </div>
    );
}
