import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddEditUserForm.scss";

export function AddEditUserForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("Formulario enviado");
            console.log(formValue);
        },
    });
    return (
        <div>
            <Form className="add-edit-user-form" onSubmit={formik.handleSubmit}>
                <Form.Input
                    name="username"
                    placeholder="Nombre de usuario"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                />
                <Form.Input
                    name="email"
                    placeholder="Correo electrónico"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Form.Input
                    name="first_name"
                    placeholder="Nombre"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.errors.first_name}
                />
                <Form.Input
                    name="last_name"
                    placeholder="Apellido"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.errors.last_name}
                />
                <Form.Input
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />

                <div className="Add-edit-user-form__active">
                    <Checkbox
                        toggle
                        checked={formik.values.is_active}
                        onChange={(e, data) => formik.setFieldValue("is_active", data.checked)}
                    />{" "}
                    Usuario activo
                </div>
                <div className="Add-edit-user-form__staff">
                    <Checkbox
                        toggle
                        checked={formik.values.is_staff}
                        onChange={(e, data) => formik.setFieldValue("is_staff", data.checked)}
                    />{" "}
                    Es miembro del staff
                </div>

                <Button type="submit" className="btn-submit" primary fluid>
                    Crear nuevo usuario
                </Button>
            </Form>
        </div>
    );
}

function initialValues() {
    return {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        is_active: true,
        is_staff: false,
    };
}

function newSchema() {
    return {
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string(),
        last_name: Yup.string(),
        password: Yup.string().required(true),
        is_active: Yup.bool().required(true),
        is_staff: Yup.bool().required(true),
    };
}
