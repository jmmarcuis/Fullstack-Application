import "../Pages/Page Styles/JoinUs.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";
import volunteerData from "../JSON Data/volunteer.json";
import connectgroupData from "../JSON Data/connectgroup.json";
import VolunteerCard from "../Components/VolunteerCard";
import ConnectGroupCard from "../Components/ConnectGroupCard"
const JoinUs = () => {
  return (
    <>
      <div className="join-us-header-container">
      <NavBar colorScheme="dark"/>
            </div>

      <div className="join-us-main-section">
        <div className="main-section-wrapper">
          <div className="main-section-title">
            <h1>Join Us</h1>
          </div>
          <div className="main-section-image-container">
            <img src="" alt="" />
          </div>
        </div>
      </div>
       

      <div className="join-us-volunteer-section">
        <div className="volunteer-title-container">
          <h1>Volunteers</h1>
        </div>

        <div className="volunteer-wrapper">
        {volunteerData.map((volunteer) => (
        <VolunteerCard key={volunteer.id} volunteer={volunteer} />
      ))}     
        </div>
      </div>

      <div className="join-us-connect-group-section">
        <div className="connect-group-title-container">
          <h1>Connect Group</h1>
        </div>

        <div className="connect-group-wrapper">
        {connectgroupData.map((connectgroup) => (
        <ConnectGroupCard key={connectgroup.id} connectgroup={connectgroup} />
      ))} 

              

        </div>
      </div>

      <div className="prayer-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default JoinUs;