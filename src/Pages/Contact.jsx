import { useState } from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Submit form (e.g., send data to server)
      console.log("Form submitted:", formData);
      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1 className="title text-gray">Contact Me</h1>
      <p className="subtitle">
        {"If you'd like to get in touch, please reach out via email or phone."}
      </p>
      <ul className="contact-info list-unstyled text-center">
        <li>Email: example@example.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>
      <form onSubmit={handleSubmit} className="contact-form w-75">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""} form-control-lg`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ borderColor: 'black', backgroundColor: '#f8f9fa' }}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""} form-control-lg`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: 'black', backgroundColor: '#f8f9fa' }}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""} form-control-lg`}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            style={{ borderColor: 'black', backgroundColor: '#f8f9fa' }}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        <div className="d-flex justify-content-center mt-4"> {/* Center the button and add margin-top */}
          <button type="submit" className="btn btn-green">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;