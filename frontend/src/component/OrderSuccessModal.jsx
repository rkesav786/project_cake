import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSuccessModal = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="container mt-5">
            <Button variant="warning w-50 fs-5 fw-bold" onClick={handleShow}>
                Place Order
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Successfull</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order has been placed successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Continue Shopping
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default OrderSuccessModal;
