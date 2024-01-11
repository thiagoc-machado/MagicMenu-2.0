import React, { useState, useCallback } from "react";
import { Form, Image, Button } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import "./AddEditCategoryForm.scss";

export function AddEditCategoryForm() {
    const [previewImage, setPreviewImage] = useState(null);
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
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
        <Form className="add-edit-category-form">
            <Form.Input name="titke" placeholder="Nombre de la categoria" />
            <Button type="button" fluid {...getRootProps()}>
                Subir image
            </Button>
            <input {...getInputProps()} />
            <Image src={previewImage} fluid />
            <Button type="submit" primary fluid content="Crear"></Button>
        </Form>
    );
}
