import React from "react";
import "./Footer.css";
import { FcAbout, FcDonate } from "react-icons/fc";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_last">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-top">
              <h2>Enter. Wait. Predict</h2>
            </div>
            <div className="footer-para">
              <p>
                {" "}
                Being a bikers’ community platform where the used bikes can
                be traded and users can get substantiated and complete
                information about all the motorcycles and can contribute to the
                virtual community reviewing the motorcycles with their
                experiences and tips. As an authenticated informational
                networking and trading portal, this project will be beneficial
                to the people and especially the motorcycle enthusiasts.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="about">
              <div className="footer-about">
                <p>
                  <FcAbout /> &nbsp;About us
                </p>
              </div>
              <div className="footer-donate">
                <p>
                  <FcDonate /> &nbsp;Donate
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-pps">
              <h2>PPS</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="copy">
              <p>&copy;2022 Chill Guys ++. All Rights Reserved. </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-icons">
              <div className="icons">
                <BsFacebook size={25} />
              </div>
              <div className="icons">
                <BsLinkedin size={25} />
              </div>
              <div className="icons">
                <AiOutlineTwitter size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
