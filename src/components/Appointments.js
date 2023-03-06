import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";

function Appointments({ appointments, setAppointments }) {
  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((appointment) => {
        return appointment.id === id
          ? { ...appointment, consulted: !appointment.consulted }
          : appointment;
      })
    );
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "#6f42c1" }}>
        Appointment List
      </h3>
      <div className="d-flex flex-column align-items-center">
        {appointments?.length < 1 && (
          <img
            src="./img/appointment.jpg"
            width={"80%"}
            alt="no appointments"
          />
        )}

        {appointments.map((appointment) => {
          const { id, patient, day, consulted, doctor } = appointment;
          return (
            <Row
              className={
                consulted
                  ? "consulted appointments align-items-center"
                  : "appointments align-items-center"
              }
              onDoubleClick={() => handleDoubleClick(id)}
            >
              <Col>
                <h4>{patient}</h4>
                <h5>{doctor}</h5>
              </Col>
              <Col className="text-center">
                <h5>Date: {new Date(day).toLocaleDateString()}</h5>
                <h6>Time: {new Date(day).toLocaleTimeString()}</h6>
              </Col>
              <Col className="text-end">
                <FaTimesCircle
                  className="text-danger fs-1"
                  onClick={() => deleteAppointment(id)}
                />
              </Col>
            </Row>
          );
        })}
      </div>
    </Container>
  );
}

export default Appointments;
