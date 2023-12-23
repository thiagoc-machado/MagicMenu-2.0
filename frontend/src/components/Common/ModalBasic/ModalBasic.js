import React from "react";
import { Modal } from "semantic-ui-react";
import "./ModalBasic.scss";

export function ModalBasic(props) {
    const { show, size, title, children, onClose } = props;
    return (
        <div>
            <Modal
                className="modal-basic"
                onClose={onClose}
                open={show}
                size={size}
            >
                {title && <Modal.Header>{title}</Modal.Header>}
                <Modal.Content>{children}</Modal.Content>
            </Modal>
        </div>
    );
}

ModalBasic.defaultProps = {
    show: false,
    size: "tiny",
};
