import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./AddEditUserForm.scss";

export function AddEditUserForm() {
    return (
        <div>
            <Form className="add-edit-user-form">
                <Form.Input
                    name="username"
                    placeholder="Nombre de usuario"
                    // onChange={}
                />
                <Form.Input
                    name="email"
                    placeholder="Correo electrónico"
                    // onChange={}
                />
                <Form.Input
                    name="First_name"
                    placeholder="Nombre"
                    // onChange={}
                />
                <Form.Input
                    name="Last_name"
                    placeholder="Apellido"
                    // onChange={}
                />
                <Form.Input
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    // onChange={}
                />

                <div className="Add-edit-user-form__active">
                    <Checkbox
                        toggle
                        // onChange={}
                    />{" "}
                    Usuario activo
                </div>
                <div className="Add-edit-user-form__staff">
                    <Checkbox
                        toggle
                        // onChange={}
                    />{" "}
                    Es miembro del staff
                </div>

                <Button type="submit" className="btn-submit" primary fluid>
                    Crear usuario
                </Button>
            </Form>
        </div>
    );
}
