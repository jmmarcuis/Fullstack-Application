import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Component Styles/footer.css";
import logo from "../assets/siteimages/sitelogo/whitelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer({ HomeRef, AboutRef, FaqRef, VolunteerRef, ShowCard }) {
  const handleLogoClick = () => {
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    AboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleFaqClick = () => {
    FaqRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleVolunteerClick = () => {
    VolunteerRef.scrollIntoView({ behavior: "smooth" });
  };

  const ShowCharityCard = ShowCard === "show" ? "block" : "none";
 

  Footer.propTypes = {
    ShowCard: PropTypes.oneOf(["block", "none"]).isRequired,

    HomeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    AboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    FaqRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  };

  return (
    <>
      <div className="link" >
        <div className="start-learning" style={{ display: ShowCharityCard }}>
          <div className="charity-box-card-container ">
            <div className="charity-box-card-container-texts">
              <h2 className="charity-box-card-container-section-title">
                Make a Difference Today
              </h2>
              <h3 className="charity-box-card-container-section-sub-heading">
                <span>Join our</span> <strong>Church Initiatives</strong>
                <span> and </span> <strong>Change Lives</strong>
              </h3>
            </div>
            <Link to="/donate">
              <button href="#" className="charity-box-card-button">
                WAYS TO GIVE
              </button>{" "}
            </Link>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content-container">
            <div className="footer-logo-container" onClick={handleLogoClick}>
            <Link to="/"><img src={logo} alt="" />  </Link>
            </div>
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/Nlsouthwoods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
              </a>
              <a
                href="https://www.instagram.com/newlifesouthwoods/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="instagram-icon"
                />
              </a>
            </div>
            <div className="footer-links">
            <Link to="/"><a onClick={handleAboutClick}>ABOUT US</a></Link>
              <Link to="/joinus"><a onClick={handleVolunteerClick}>VOLUNTEER</a></Link>
              <Link to="/events">EVENTS</Link>
              <Link to="/registeradmin">GIVE</Link>
              <Link to="/"> <a onClick={handleFaqClick}>FAQS</a></Link>
              <Link to="/login">ADMIN</Link>
            </div>

            <div className="footer-copyright">
              <p>&copy; 2021 New Life. All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
