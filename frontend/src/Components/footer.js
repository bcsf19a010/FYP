import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer container-fluid">
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fs-about">
                <div className="fa-logo">
                  <a className="footer-link" href="/">
                    <img src="/images/logo.png" alt="" />
                  </a>
                </div>
                <p style={{ paddingTop: "5px" }}>
                  We are working on our Final year project, which is the
                  culmination of our academic journey under the supervision of{" "}
                  <strong>Ms. Sanam Ahmad</strong>.
                </p>

                <div className="fa-social">
                  <a
                    className="footer-link mr-3"
                    href="https://www.facebook.com"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    className="footer-link mr-3"
                    href="https://www.twitter.com"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="footer-link mr-3"
                    href="https://www.youtube.com"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a
                    className="footer-link mr-3"
                    href="https://www.instagram.com"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="footer-link mr-3"
                    href="https://www.whatsapp.com"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a className="footer-link" href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="/about">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a className="footer-link" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="/signup">
                      signup
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="fs-widget">
                <h4>Tips &amp; Guides</h4>
                <ul>
                  <li>
                    <div className="fw-recent">
                      <h6>
                        Physical fitness may help prevent depression, anxiety
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="fw-recent">
                      <h6>Consistency is key to seeing results in fitness</h6>
                    </div>
                  </li>
                  <li>
                    <div className="fw-recent">
                      <h6>
                        Proper nutrition is important for fueling workouts and
                        building muscle
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="fw-recent">
                      <h6>
                        Strength training can help improve bone density,
                        increase muscle mass
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright-text">
                <p>
                  Copyright © All rights reserved | This is our Final Year
                  Project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
