// eslint-disable-next-line
import React, { useState } from "react";
import Navbar from "./Navbar";
import imagin from "./images/bgimage.avif";
import img4 from "./images/callimage.png";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "portfolio-fe",
        "auto-reply-template",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )
      .then(() => {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send email");
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imagin})`,
        color: "white",
        height: "100vh",
      }}
    >
      <Navbar />

      <section className="mb-4 m-4">
        <h2 className="text-center my-4">Contact us</h2>

        <p className="text-center mb-5">
          Do you have any questions? Please contact us directly.
        </p>

        <div className="row">
          <div className="col-md-9">
            <form onSubmit={handleSubmit}>
              
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mt-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Right side info */}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled">
              <li>
                <p>North India</p>
              </li>

              <li>
                <img src={img4} width="20px" height="20px" alt="icon" />
                <p>
                  <a href="https://www.linkedin.com/">
                    Linkedin
                  </a>
                </p>
              </li>

              <li>
                <p>devsri</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;