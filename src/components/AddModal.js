import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Appointments from "./Appointments";

function AddModal({
  show,
  handleClose,
  selectedDoctor,
  appointments,
  setAppointments,
}) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      id: appointments.length + 1,
      patient: patientName,
      day: date,
      consulted: false,
      doctor: selectedDoctor,
    };
    setAppointments([...appointments, appointment]);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reservation for {selectedDoctor}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="patientName">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter patient name"
              required
              onChange={(e) => setPatientName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dateTime">
            <Form.Label>Day & Time</Form.Label>
            <Form.Control
              type="datetime-local"
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddModal;
