import React, { useState, useCallback } from "react";
import { Form, Image, Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import "./AddEditCategoryForm.scss";
import { useCategory } from "../../../../hooks";
import { useFormik } from "formik";
import * as Yup from "yup";

export function AddEditCategoryForm(props) {
  const { onClose, onRefetch } = props;
    const [previewImage, setPreviewImage] = useState(null);
    const { addCategory } = useCategory();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await addCategory(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.log(error);
            }
        },
    });

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        await formik.setFieldValue("image", file);
        setPreviewImage(URL.createObjectURL(file));
        console.log(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop,
    });

    return (
        <Form className="add-edit-category-form" onSubmit={formik.handleSubmit}>
            <Form.Input
                name="title"
                placeholder="Nombre de la categoria"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.errors.title}
            />
            <Button
                type="button"
                fluid
                {...getRootProps()}
                color={formik.errors.image && "red"}
            >
                Subir menu image
            </Button>
            <input {...getInputProps()} />
            <Image src={previewImage} fluid />
            <Button type="submit" primary fluid content="Crear"></Button>
        </Form>
    );
}

function initialValues() {
    return {
        title: "",
        image: "",
    };
}

function newSchema() {
    return {
        title: Yup.string().required(true),
        image: Yup.string().required(true),
    };
}
