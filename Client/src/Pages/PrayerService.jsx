import  { useState } from "react";
import "../Pages/Page Styles/PrayerServices.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";

const PrayerService = () => {
  // State for handling input values
 

  const [prayerReqData, setPrayerReqData] = useState({
    name: '',
    date: getCurrentDate(), // Set initial date to the current date
    prayerText: '',
  });

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, date, prayerText } = prayerReqData;
  
    try {
      const response = await axios.post('/prayerrequests/addprayerreq', {
        name,
        date,
        prayerText,
      });
  
      const responseData = response.data; // Rename to avoid conflict
  
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        // Update only the relevant part of the state
        setPrayerReqData((prevData) => ({
          ...prevData,
          message: 'Prayer Request successfully created!',
        }));
        toast.success('Prayer Request successfully created!');
  
        setPrayerReqData({
          name: '',
          date: getCurrentDate(), // Set date to the current date after submission
          prayerText: '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


 
  return (
    <>
      <div className="prayer-header-container">
        <NavBar />

        <div className="prayer-text-container">
          <h1 className="prayer-title">PRAYER REQUEST</h1>
        </div>
      </div>


      <div className="prayer-section-container">
        <form onSubmit={handleSubmit}>
          <div className="prayer-request-container">
            <div className="prayer-wrapper">
              <div className="prayer-input-container">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="prayerclientname"
                  value={prayerReqData.name}
                  onChange={(e) => setPrayerReqData({ ...prayerReqData, name: e.target.value })}
                  />
              </div>

              <div className="prayer-input-container">
                <label htmlFor="date">Date:</label>
                <input
                  placeholder="Date:"
                  type="date"
                  id="prayerclientdate"
                  value={prayerReqData.date}
                  onChange={(e) => setPrayerReqData({ ...prayerReqData, date: e.target.value })}
                  disabled 
                />
              </div>
            </div>

            <div className="prayer-input-container">
              <textarea
                placeholder="Enter Prayer..."
                id="prayerText"
                value={prayerReqData.prayerText}
                onChange={(e) => setPrayerReqData({ ...prayerReqData, prayerText: e.target.value })}
              />
            </div>

            <button type="submit" className="prayer-button">
              <span className="prayer-button-span">Submit</span>
            </button>
          </div>
        </form>
      </div>

      <div className="prayer-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default PrayerService;
