import "../Pages/Page Styles/JoinUs.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";

const JoinUs = () => {
  return (
    <>
      <div className="join-us-header-container">
        <NavBar />

        <div className="join-us-text-container">
          <h1 className="join-us-title">PRAYER REQUEST</h1>
        </div>
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
      <div className="join-us-ministry-section">
        <div className="ministry-title-container">
          <h1>MINISTRIES</h1>
        </div>

        <div className="ministry-wrapper">

        </div>
      </div>
      <div className="join-us-volunteer-section">
      <div className="ministry-title-container">
          <h1>MINISTRIES</h1>
        </div>

        <div className="ministry-wrapper">
            
        </div>
      </div>
      <div className="join-us-connect-group">
      <div className="ministry-title-container">
          <h1>MINISTRIES</h1>
        </div>

        <div className="ministry-wrapper">
            
        </div>
      </div>

      <div className="prayer-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default JoinUs;