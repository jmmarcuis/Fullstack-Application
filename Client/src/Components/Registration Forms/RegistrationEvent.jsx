import { useState,   } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import NavBar from "../navBar";
import Footer from "../Footer";

const RegistrationEvent = () => {
  const location = useLocation();
  const { event, eventId } = location.state;

  // State variables to manage form data
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationData = {
      eventId: eventId,
      name,
      age,
      sex,
      email,
      contact,
    };

    try {
      const response = await axios.post("/eventvolunteer/registervolunteer", registrationData);
      console.log(response.data.message); // Log the response message
      // You can handle success, for example, show a success message or redirect the user
    } catch (error) {
      console.error("Error registering volunteer:", error.response.data.message);
      // Handle errors here, for example, show an error message to the user
    }
  };

  return (
    <>
      <div className="registration-navbar-container">
        <NavBar colorScheme="dark" />
      </div>
      <div className="registration-form-container">
        <form onSubmit={handleSubmit}>
          <div className="registration-form-title">
            <h1>REGISTRATION</h1>
            <h2>EVENTS</h2>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="event">EVENT:</label>
            <div className="registration-event-name">{event.eventTitle}</div>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name..."
              required
            />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="age">AGE:</label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age..."
              required
            />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="sex">SEX:</label>
            <select
              id="sex"
              name="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
            >
              <option value="" disabled hidden>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="email">EMAIL:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email..."
              required
            />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="contact">CONTACT NO:</label>
            <input
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter Contact Number..."
              required
            />
          </div>
          <div className="registration-button-container">
            <button type="reset" className="registration-button">
              <span className="registration-button-span">Reset</span>
            </button>
            <button type="submit" className="registration-button">
              <span className="registration-button-span">Submit</span>
            </button>
          </div>
        </form>
      </div>
      <div className="registration-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default RegistrationEvent;
