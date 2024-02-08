import { useState } from "react";
import "../Dashboard Component Styles/EventCard.css";
import PropTypes from "prop-types";
import ViewConnectModal from "./ViewConnectModal";

const ConnectgroupCard = ({ connectgroupActivity, connectgroupActivities  }) => {
  const [isConnectModalOpen, setEventModalOpen] = useState(false);


  const openModal = () => {
    isConnectModalOpen(true);
  };

  const closeModal = () => {
    isConnectModalOpen(false);
  };

  const handleEventModalOpen = () => {
    setEventModalOpen(true);
  };

  const handleEventModalClose = () => {
    setEventModalOpen(false);
  };

  return (
    <div className="event-card">

      <div className="event-icons">
        <div className="icon-container" onClick={openModal}>
          <img src={connectgroupActivity.connectgroupActivityImage} 
          className="event-card-img"/>
          {/* <FontAwesomeIcon icon={faEdit} /> */}
        </div>
      </div>
      <div className="event-card-info">
        <div className="event-card-text" />
          
        <div
          className="event-card-button"
          id="display_event_modal"
          onClick={handleEventModalOpen} // Add click event to open EventModal
        >
          <svg viewBox="0 0 28 25" className="event-icon">
            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
          </svg>
        </div>
      </div>

      <ViewConnectModal
        isConnectModalOpen={isConnectModalOpen}
        onEventClose={handleEventModalClose}
        onRequestClose={closeModal}
        event={connectgroupActivity}
        connectgroupActivities={connectgroupActivities}
      />
    </div>
  );
};

ConnectgroupCard.propTypes = {
    connectgroupActivity: PropTypes.shape({
        connectgroupActivityId: PropTypes.number.isRequired,
        connectgroupActivityImage: PropTypes.string.isRequired,
        connectgroupActivityName: PropTypes.string.isRequired,
        connectgroupActivityDescription: PropTypes.string.isRequired,
    }).isRequired,
    connectgroupActivities: PropTypes.array.isRequired,
  };
  
export default ConnectgroupCard;
