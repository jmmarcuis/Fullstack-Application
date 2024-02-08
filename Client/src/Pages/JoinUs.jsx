import { useEffect } from "react";
import { useRef } from "react";
import "../Pages/Page Styles/JoinUs.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import volunteerData from "../JSON Data/volunteer.json";
import connectgroupData from "../JSON Data/connectgroup.json";
import joinusministryData from "../JSON Data/joinusministries.json";
import VolunteerCard from "../Components/VolunteerCard";
import ConnectGroupCard from "../Components/ConnectGroupCard";
import MinistryCard from "../Components/JoinUsMinistryCard";
import joinus from "../assets/siteimages/donationpage/joinus.jpg";

const JoinUs = () => {
  const MinistryRef = useRef();
  const VolunteerRef = useRef();
  const ConnectRef = useRef();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="join-us-header-container">
      <NavBar colorScheme="dark" 
      MinistryRef={MinistryRef} 
      VolunteerRef={VolunteerRef} 
      ConnectRef={ConnectRef}/>
            </div>

      <div className="join-us-main-section">
        <div className="main-section-wrapper">
          <div className="main-section-title">
            <h1>Join Us</h1>
          </div>
          <div className="main-section-image-container">
            <img src={joinus} alt="" />
          </div>
        </div>
      </div>
      
      <div className="join-us-ministry-section" id="ministry">
        <div  className="ministry-title-container">
          <h1 ref={MinistryRef}>Ministries</h1>
        </div>

        <div className="ministry-wrapper">
        {joinusministryData.map((joinusministrycard) => (
        <MinistryCard key={joinusministrycard.id} joinusministrycard={joinusministrycard} />
      ))}     
        </div>
      </div>

      <div className="join-us-volunteer-section" id="volunteer">
        <div className="volunteer-title-container">
          <h1 ref={VolunteerRef}>Volunteers</h1>
        </div>

        <div className="volunteer-wrapper">
        {volunteerData.map((volunteer) => (
        <VolunteerCard key={volunteer.id} volunteer={volunteer} />
      ))}     
        </div>
      </div>

      <div className="join-us-connect-group-section" id="connect">
        <div ref={ConnectRef} className="connect-group-title-container">
          <h1>Connect Group</h1>
        </div>

        <div className="connect-group-wrapper">
        {connectgroupData.map((connectgroup) => (
        <ConnectGroupCard key={connectgroup.id} connectgroup={connectgroup} />
      ))} 

              

        </div>
      </div>

      <div className="prayer-footer-container">
        <Footer VolunteerRef={VolunteerRef}/>
      </div>
    </>
  );
};

export default JoinUs;
