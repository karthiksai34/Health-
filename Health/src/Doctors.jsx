import React from 'react';
import './Doctors.css';

function Doctors() {
  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <h2>Our Doctors</h2>
        <div className="doctor-list">
          <div className="doctor">
            <img src="https://images.jdmagicbox.com/v2/comp/hyderabad/z8/040pxx40.xx40.160217111648.j5z8/catalogue/dr-narayana-rao-asv-apollo-hospital-hyderguda-basheer-bagh-hyderabad-cardiologists-1y3sms5-250.jpg" alt="Doctor 1" />
            <h3>Dr. Narayana Rao</h3>
            <p>Cardiologist</p>
          </div>
          <div className="doctor">
            <img src="https://apollosage.in/assets/images/doctors/dr-promise-jain.webp" alt="Doctor 2" />
            <h3>Dr. Jane Smith</h3>
            <p>Oncologist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;