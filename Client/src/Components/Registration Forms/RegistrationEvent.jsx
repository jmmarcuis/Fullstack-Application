import { useState,   } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import NavBar from "../NavBar";
import Footer from "../Footer";
import { toast } from "react-hot-toast";

const RegistrationEvent = () => {
  const location = useLocation();
  const { event, eventId } = location.state;

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // State variables to manage form data
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContact] = useState("");

  const resetForm = () => {
    setName("");
    setAge("");
    setSex("");
    setEmail("");
    setContact("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationData = {
      eventId: eventId,
      name,
      age,
      sex,
      email,
      contactNo,
    };



    try {
      const response = await axios.post("/eventvolunteer/registervolunteer", registrationData);
      console.log(response.data.message); // Log the response message
      toast.success('Volunteer registered successfully');
      // Clear form fields
      setName("");
      setAge("");
      setSex("");
      setEmail("");
      setContact("");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 400) {
          // Check for specific error messages
          if (error.response.data.message === 'Age must be a number') {
            toast.error('Age must be a number');
          } else if (error.response.data.message === 'Volunteer already registered') {
            toast.error('Volunteer already registered');
          } else if (error.response.data.message === 'Event ID is required') {
            toast.error('Event ID is required');
          } else {
            toast.error('Error registering volunteer');
          }
        } else {
          // Handle other status codes
          toast.error('Error registering volunteer');
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast.error('No response from server');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error:', error.message);
        toast.error('Error registering volunteer');
      }
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
              min="1"
              max="100"
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
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
            />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="contact">CONTACT NO:</label>
            <input
              type="tel"
              name="contact"
              value={ contactNo }
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter Contact Number..."
              required
              pattern="^(09|\+639)\d{9}$"
            />
          </div>
          <div className="registration-button-container">
          <button type="reset" className="registration-button" onClick={resetForm}>
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
