import React from 'react'
import './LoginForm.scss'
import { Button, Form } from "semantic-ui-react"
import { useFormik } from "formik"
import * as Yup from "yup"

export function LoginForm() {

    const formik = useFormik({
        initialValues: intialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            console.log('Formulario enviado');
            console.log(formValue);
        }
    });

    return (
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input 
            name="email" 
            placeholder="Correo electronico" 
            value={formik.values.email} 
            onChange={formik.handleChange}
            error={formik.errors.email}
            />
            <Form.Input 
            name="password" 
            placeholder="Contraseña" 
            type="password" 
            value={formik.values.password} 
            onChange={formik.handleChange}
            error={formik.errors.password}
            />
            <Button 
            type="submit" 
            content="Iniciar sesión" 
            primary fluid 
            />
        </Form>
    );
    }

function intialValues() {
    return {
        email: "",
        password: "",
        };
    }


    function validationSchema() {
        return {
            email: Yup.string().email(" Formato de email incorrecto ").required(true),
            password: Yup.string().required(true),
        };
    }