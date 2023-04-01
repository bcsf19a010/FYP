import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import image from "../Resources/images/logo.png";
import './footer.css';

export default function Footer() {
  return (
    <div className="footer container-fluid" >
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fs-about">
                <div className="fa-logo">
                  <a className = "footer-link" href="#">
                    <img src={image} alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua
                  endisse ultrices gravida lorem.
                </p>
                <div className="fa-social">
                  <a className = "footer-link" href="https://www.facebook.com">
                    <i className="fa fa-facebook" />
                  </a>
                  <a className = "footer-link" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className = "footer-link" href="#">
                    <i className="fa fa-youtube-play" />
                  </a>
                  <a className = "footer-link" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a className = "footer-link" href="#">
                    <i className="fa fa-envelope-o" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a className = "footer-link" href="#">About</a>
                  </li>
                  <li>
                    <a className = "footer-link" href="#">Blog</a>
                  </li>
                  <li>
                    <a className = "footer-link" href="#">Classes</a>
                  </li>
                  <li>
                    <a className = "footer-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="fs-widget">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a className = "footer-link" href="#">Login</a>
                  </li>
                  <li>
                    <a className = "footer-link" href="#">My account</a>
                  </li>
                  <li>
                    <a className = "footer-link" href="#">Subscribe</a>
                  </li>
                  <li>
                    <a className = "footer-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="fs-widget">
                <h4>Tips &amp; Guides</h4>
                <div className="fw-recent">
                  <h6>
                    <a className = "footer-link" href="#">
                      Physical fitness may help prevent depression, anxiety
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
                <div className="fw-recent">
                  <h6>
                    <a className = "footer-link" href="#">
                      Fitness: The best exercise to lose belly fat and tone
                      up...
                    </a>
                  </h6>
                  <ul>
                    <li>3 min read</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright-text">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a className = "footer-link" href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
