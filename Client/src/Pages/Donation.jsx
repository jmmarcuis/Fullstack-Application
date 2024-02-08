import "../Pages/Page Styles/Donation.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Donation = () => {
  return (
    <>
      <div className="donation-header-container">
        <NavBar />

        <div className="donation-text-container">
          <h1 className="donation-title">WAYS TO GIVE</h1>
        </div> 
      </div>

      <div className="donation-section-container">
        <h1>BANK TRANSFER</h1>
        <h2>Your giving may be electronically transferred, deposited <br/>online, or over-the-counter to any of our banks</h2>
        <div className="donation-card-containerr">
          <img className="donation-card" src="..\src\assets\siteimages\donationpage\Gcash.png" placeholder="Bank Account"/>
          <img className="donation-card" src="..\src\assets\siteimages\donationpage\Security Bank.png" placeholder="Bank Account"/>
        </div>
      
        <div className="donation-overlay-container">
          <h1>Need Receipt?</h1>
          <p>To get a receipt, please send a copy or a screenshot of the deposit slip <br/>
          with your complete name, contact details, and mailing address <br/>
          to <strong>newlifesouthwoods@gmail.com</strong></p>
        </div>
      </div>

      <div className="donation-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Donation;
