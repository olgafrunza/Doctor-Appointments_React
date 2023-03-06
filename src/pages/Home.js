import React, { useState } from "react";
import Appointments from "../components/Appointments";
import Doctors from "../components/Doctors";

function Home() {
  const [appointments, setAppointments] = useState([]);

  return (
    <main className="text-center mt-2">
      <h1 className="text-danger display-5">CLARUS HOSPITAL</h1>
      <Doctors appointments={appointments} setAppointments={setAppointments} />
      <Appointments
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
}

export default Home;
