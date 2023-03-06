import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { doctorData } from "../helpers/data";
import AddModal from "./AddModal";

function Doctors({ appointments, setAppointments }) {
  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (drName) => {
    setSelectedDoctor(drName);
    handleShow();
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "#6f42c1" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctorData.map((doctor) => (
          <Col xs={6} sm={4} md={3} key={doctor.id}>
            <img
              src={doctor.img}
              alt={doctor.name}
              className="doctor-img img-thumbnail"
              onClick={() => handleClick(doctor.name)}
            />
            <div>
              <h5>{doctor.name}</h5>
              <h6>{doctor.dep}</h6>
            </div>
          </Col>
        ))}
      </Row>

      <AddModal
        show={show}
        handleClose={handleClose}
        selectedDoctor={selectedDoctor}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
}

export default Doctors;
