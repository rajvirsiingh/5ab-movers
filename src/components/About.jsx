import React from "react";
import movingTruck from "../assets/man-loading-moving-truck.jpg";
const About = () => {
  return (
    <div className="about-container">
      <section>
        <img src={movingTruck} alt="Moving Truck" />
      </section>
      <section>
        <h2>About 5AB Brisbane Movers</h2>
        <p>
          5AB Brisbane Movers is a leading moving company based in Brisbane,
          dedicated to providing top-notch relocation services for both
          residential and commercial clients. With years of experience in the
          industry, we pride ourselves on our professionalism, reliability, and
          customer-centric approach.
        </p>
        <p>
          Our team of skilled movers is trained to handle all aspects of the
          moving process, ensuring that your belongings are transported safely
          and efficiently. We offer a range of services including packing,
          loading, transportation, unloading, and unpacking to make your move as
          stress-free as possible.
        </p>
        <div className="about-icons-container">
          <div className="about-icons">
            <i class="fa fa-shield" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>100%</h3>
              <p>Insured Moves</p>
            </div>
          </div>
          <div className="about-icons">
            <i class="fa fa-users" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>1000+</h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
          <div className="about-icons">
            <i class="fa fa-clock" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
          <div className="about-icons">
            <i class="fa fa-certificate" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>10 Years</h3>
              <p>Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
