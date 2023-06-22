import React from "react";
import "./about.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function About() {
  return (
    <>
      <div className="hm">
        <div className="cntnr">
          <div className="txt">
            <p className="txt">
              <font color="orangered">About</font> Us
            </p>
          </div>
        </div>
      </div>

      <section
        className="choseus-section spad"
        style={{ backgroundColor: "black", color: "white", padding: "20px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Why chose us?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBlock: "30px" }}>
            <div className="col-lg-4 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-stationary-bike" />
                <h4>Modern equipment</h4>
                <p>
                  "We take pride in offering our members the latest and most
                  advanced gym equipment available to help you achieve your
                  fitness goals.""
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-002-dumbell" />
                <h4>Proffesional training plan</h4>
                <p>
                  "Our gym offers professional training plans tailored to your
                  individual needs, to help you get the most out of your
                  workouts."
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-014-heart-beat" />
                <h4>Unique to your needs</h4>
                <p>
                  "We pride ourselves on providing personalized fitness
                  solutions that are tailored to meet your unique needs and
                  goals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="aboutus-section" style={{ margin: "20px" }}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="about-video set-bg"></div>
            </div>
            <div class="col-lg-6 p-0">
              <div class="about-text">
                <div
                  class="section-title"
                  style={{ marginLeft: "10px", marginTop: "50px" }}
                >
                  <span>About Us</span>
                  <h2>What we have done</h2>
                </div>
                <div class="at-desc" style={{ marginLeft: "10px" }}>
                  <p className="atxt">
                    <strong>1.</strong> We have helped countless individuals
                    achieve their fitness goals through our personalized
                    training plans and state-of-the-art equipment.
                  </p>
                  <p className="atxt">
                    <strong>2.</strong> We have established a strong reputation
                    for providing exceptional customer service, fostering a
                    welcoming and inclusive environment, and offering a diverse
                    range of fitness programs to meet the needs of all our
                    clients.
                  </p>
                  <p className="atxt">
                    <strong>3.</strong> We have made it a priority to stay
                    up-to-date with the latest industry trends and best
                    practices to ensure that our clients receive the highest
                    quality fitness experience possible.
                  </p>
                  <p className="atxt">
                    <strong>4.</strong> Through our dedication and commitment to
                    our clients' success, we have built a loyal and supportive
                    community of fitness enthusiasts who continue to rely on us
                    for all their health and fitness needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
