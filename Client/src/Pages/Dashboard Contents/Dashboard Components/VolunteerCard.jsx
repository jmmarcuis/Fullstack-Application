import { useState } from "react";
import "../Dashboard Component Styles/EventCard.css";
import PropTypes from "prop-types";
import ViewParticipantsModal from "./ViewParticipantsModal";

const VolunteerCard = ({ volunteerActivity, volunteerActivities  }) => {
  const [isVPModalOpen, setEventModalOpen] = useState(false);


  const openModal = () => {
    isVPModalOpen(true);
  };

  const closeModal = () => {
    isVPModalOpen(false);
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
          <img src={volunteerActivity.volunteerActivityImage} 
            className="event-card-img-volunteer"/>
          {/* <FontAwesomeIcon icon={faEdit} /> */}
        </div>
      </div>
      <div className="event-card-info">
        <div className="event-card-text"/>
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

      <ViewParticipantsModal
        isVPModalOpen={isVPModalOpen}
        onEventClose={handleEventModalClose}
        onRequestClose={closeModal}
        event={volunteerActivity}
        volunteerActivities={volunteerActivities}
      />
    </div>
  );
};

VolunteerCard.propTypes = {
    volunteerActivity: PropTypes.shape({
        volunteerActivityId: PropTypes.number.isRequired,
        volunteerActivityImage: PropTypes.string.isRequired,
        volunteerActivityName: PropTypes.string.isRequired,
        volunteerActivityDescription: PropTypes.string.isRequired,
    }).isRequired,
    volunteerActivities: PropTypes.array.isRequired,
  };
  
export default VolunteerCard;
