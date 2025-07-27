import React from "react";
import "../css/Contact.css";
import images from "../images/sideimg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-md-6 mb-4">
            <h4 className="tex mb-4 text-success text-center ">Get In Touch With Us</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="btn btn-dark">Send</button>
            </form>
          </div>

          <div className="side-img col-md-5 text-center">
            <img
              src={images}
              alt="Contact Visual"
              height={400}
              // className="img-fluid contact-img shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
