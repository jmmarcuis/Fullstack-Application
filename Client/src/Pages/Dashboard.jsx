import { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faUsers,
  faPrayingHands,
  faUsersCog,
  faSignOutAlt,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Pages/Page Styles/Dashboard.css";
import logo from "../assets/siteimages/sitelogo/whitelogo.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; 
import { toast } from "react-hot-toast";


import EventsContent from "./Dashboard Contents/EventsContent";
import ConnectGroupsContent from "./Dashboard Contents/ConnectGroupsContent";
import PrayerRequestContent from "./Dashboard Contents/PrayerRequestContent";
import VolunteersContent from "./Dashboard Contents/VolunteersContent";
import PastorialContent from "./Dashboard Contents/PastorialContent"

import EventList from "./Dashboard Contents/Attendees List/EventList";
import ConnectgroupList from"./Dashboard Contents/Attendees List/ConnectgroupList"
import VolunteersList from "./Dashboard Contents/Attendees List/VolunteersList"

library.add(
  fab,
  faCalendarAlt,
  faUsers,
  faPrayingHands,
  faUsersCog,
  faSignOutAlt,
  faBook
);


function Dashboard({ handleLogout }) {
  const [userData, setUserData] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isListOfParticipantsHovered, setIsListOfParticipantsHovered] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData({ email: response.data.email }); // Assuming the email is in response.data.email
      } catch (error) {
        console.error("Error fetching user data:", error);
        console.log("Error details:", error.response?.data);
      }
    };
  
    fetchUserData();
  }, []);

  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await axios.post("/auth/logout");
      localStorage.removeItem("token");
      handleLogout(); // Call handleLogout function provided as a prop
      navigate("/login"); // Redirect to the login page
      toast.success("Successfully logged out");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleSubMenuClick = (submenuItem) => {
    setSelectedMenu(submenuItem);
    setShowSubMenu(false); 
    setIsListOfParticipantsHovered(false);
  };

  const handleListOfParticipantsHoverEnter = () => {
    clearTimeout(submenuTimeout);
    setShowSubMenu(true);
    setIsListOfParticipantsHovered(true);
  };

  const handleListOfParticipantsHoverLeave = () => {
    const timeout = setTimeout(() => {
      setShowSubMenu(false);
      setIsListOfParticipantsHovered(false);
    }, 500); 
    setSubmenuTimeout(timeout);
  };

  // Function to handle mouse enter on the submenu
  const handleSubMenuMouseEnter = () => {
    clearTimeout(submenuTimeout);
    setShowSubMenu(true);
    setIsListOfParticipantsHovered(true);
  };

  // Function to handle mouse leave from the submenu
  const handleSubMenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowSubMenu(false);
      setIsListOfParticipantsHovered(false);
    }, 300);
    setSubmenuTimeout(timeout);
  };

  return (
    <>
      <div className="side-panel">
        <div className="dashboard-side-panel-wrapper">
          <div className="dashboard-logo-container">
            <img src={logo} alt="Logo" className="dashboard-logo" />
          </div>
          <div className="dashboard-admin-container">
            {userData ? (
              <p>{userData.email || "Unknown"}</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="dashboard-menu-items">
            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("viewevents")}
            >
              <FontAwesomeIcon icon={faCalendarAlt} />
              <p>Events</p>
            </div>
            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("connectGroups")}
            >
              <FontAwesomeIcon icon={faUsersCog} />
              <p>Connect Groups</p>
            </div>

            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("volunteers")}
            >
              <FontAwesomeIcon icon={faUsers} />
              <p>Volunteers</p>
            </div>
            <div
              className="dashboard-menu-item"
              onMouseEnter={handleListOfParticipantsHoverEnter}
              onMouseLeave={handleListOfParticipantsHoverLeave}
              style={{ 
                opacity: isListOfParticipantsHovered || showSubMenu ? 0.6 : 1,
                transition: "opacity 0.25s"
               }}
            >
              <FontAwesomeIcon icon={faBook} />
              <p>List of Participants</p>
            </div>
            {showSubMenu && (
                <div className="submenu"
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}>
                  <div
                    className="submenu-item"
                    onClick={() => handleSubMenuClick("volunteerlist")}
                  >
                    Volunteers
                  </div>
                  <div
                    className="submenu-item"
                    onClick={() => handleSubMenuClick("connectgrouplist")}
                  >
                    Connect Groups
                  </div>
                  <div
                    className="submenu-item"
                    onClick={() => handleSubMenuClick("eventslist")} //pls change not sure sa name
                  >
                    Events
                  </div>
                </div>
              )}

            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("prayer")}
              style={{ marginTop: isListOfParticipantsHovered ? "140px" : "0px" }}
            >
              <FontAwesomeIcon icon={faPrayingHands} />
              <p>Prayer Request</p>
            </div>

            <div
              className="dashboard-menu-item"
              onClick={() => handleMenuClick("pastorial")}
            >
              <FontAwesomeIcon icon={faPrayingHands} />
              <p>Pastorial Care</p>
            </div>

            <div
              className="dashboard-menu-item"
              id="dashboard-logout"
              onClick={() => handleLogoutClick( )}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="main-content">
          {selectedMenu === "viewevents" && <EventsContent />}
          {selectedMenu === "volunteers" && <VolunteersContent />}
          {selectedMenu === "prayer" && <PrayerRequestContent />}
          {selectedMenu === "pastorial" && <PastorialContent />}
          {selectedMenu === "connectGroups" && <ConnectGroupsContent />}
          {selectedMenu === "volunteerlist" && <VolunteersList />}
          {selectedMenu === "connectgrouplist" && <ConnectgroupList />}
          {selectedMenu === "eventslist" && <EventList />}
        </div>
      </div>
    </>
  );
}

Dashboard.propTypes={
  handleLogout: PropTypes.func.isRequired,

}

export default Dashboard;
