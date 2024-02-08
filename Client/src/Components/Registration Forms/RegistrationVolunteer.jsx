import  { useState } from "react";
import { useEffect } from "react";
import "./Registration.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegistrationVolunteer = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const aydee = queryParameters.get("a")
  const volunteerName = queryParameters.get("b") 

  const [volunteerData, setVolunteerData] = useState({
    volunteerId: aydee,
    volunteerName: volunteerName,
    name: '',
    age: '',
    sex: '',
    email: '',
    contactNo: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { volunteerId, name, age, sex, email, contactNo } = volunteerData;
  
    try {
      const response = await axios.post('/volunteer/addvolunteer', {
        volunteerId,
        name,
        age,
        sex,
        email,
        contactNo
      });
  
      const responseData = response.data; // Rename to avoid conflict
  
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        // Update only the relevant part of the state
        setVolunteerData((prevData) => ({
          ...prevData,
          message: 'Your submission has been sent!',
        }));
        toast.success('Your submission has been sent!');
  
        setVolunteerData({
          volunteerId: aydee,
          name: '',
          age: '',
          sex: '',
          email: '',
          contactNo: ''
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="registration-navbar-container">
        <NavBar colorScheme="dark" />
      </div>

      <div className="registration-form-container">
        <form onSubmit={handleSubmit}>
          <div className="registration-form-title">
            <h1>REGISTRATION</h1>
            <h2>VOLUNTEER:{/*Here yung choosen field kids & Junior youth and yung 5 volunteers*/} </h2>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="name">NAME:</label>
            <input 
              type="text" 
              id="volunteername"
              value={volunteerData.name}
              onChange={(e) => setVolunteerData({ ...volunteerData, name: e.target.value })}
              name="name"
              placeholder="Enter Name..." 
              required 
              />
          </div>
          
          <div className="registration-aligned-fields">
            <label htmlFor="age">AGE:</label>
            <input  
              type="number" 
              id="volunteerage"
              value={volunteerData.age}
              onChange={(e) => setVolunteerData({ ...volunteerData, age: e.target.value })}
              name="age" 
              placeholder="Enter Age..." 
              required 
              min="1"
              max="100"
              />
          </div>

          <div className="registration-aligned-fields">
            <label htmlFor="sex">SEX:</label>
            <select 
              name="sex" 
              defaultValue="" required
              id="volunteersex"
              value={volunteerData.sex}
              onChange={(e) => setVolunteerData({ ...volunteerData, sex: e.target.value })}>
              <option value="" disabled hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="email">EMAIL:</label>
            <input 
              type="text" 
              id="volunteeremail"
              value={volunteerData.email}
              onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
              name="email" 
              placeholder="Enter Email..." 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
              required 
              />
          </div>
          <div className="registration-aligned-fields">
            <label htmlFor="contact">CONTACT NO:</label>
            <input 
              type="text" 
              id="volunteercontact"
              value={volunteerData.contactNo}
              onChange={(e) => setVolunteerData({ ...volunteerData, contactNo: e.target.value })}
              name="contact" 
              placeholder="Enter Contact Number..." 
              className="other-style" 
              required 
              pattern="^(09|\+639)\d{9}$"
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

export default RegistrationVolunteer;