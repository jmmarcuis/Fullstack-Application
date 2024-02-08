import { useState } from "react";
import "../Dashboard Component Styles/EventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import ConfirmationModal from "./ConfirmationModal";
import EventModal from "./EventModal"; // assuming you have an EventModal component
import Modal from "react-modal";
import { customModalStyles } from "../Dashboard Style/DashboardModalStyle";
import EditEvents from "./EditEvents";

const EventCard = ({ event, onDelete, onEditSuccess }) => {
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEventModalOpen, setEventModalOpen] = useState(false); // State for event modal
  const [isEditModalOpen, setEditModalOpen] = useState(false); // State for edit modal
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventCategory: "",
    eventDescription: "",
    eventHost: "",
    eventLocation: "",
    thumbnailFile: null,
  });

  // OPEN MODALS

  const handleDeleteClick = (id) => {
    setSelectedRequestId(id);
    setDeleteModalOpen(true);
  };

  const handleEventModalOpen = () => {
    setEventModalOpen(true);
  };

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
    setFormData({
      eventTitle: event.eventTitle,
      eventDate: event.eventDate,
      eventStartTime: event.eventStartTime,
      eventEndTime: event.eventEndTime,
      eventCategory: event.eventCategory,
      eventDescription: event.eventDescription,
      eventHost: event.eventHost,
      eventLocation: event.eventLocation,
      thumbnailFile: null, // You may want to add logic for handling the thumbnail
    });
  };

  // CLOSE MODALS

  const handleDeleteCancel = () => {
    setSelectedRequestId(null);
    setDeleteModalOpen(false);
  };

  const handleEventModalClose = () => {
    setEventModalOpen(false);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  //MODAL CRUD OPERATIONS

  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(
        `/event/deleteeventid/${selectedRequestId}`
      );
      toast.success(response.data.message);
      onDelete(selectedRequestId);
      setDeleteModalOpen(false);
    } catch (error) {
      toast.error("Error deleting event");
    }
  };

  const formattedDate =
    event.eventDate.substring(5, 7) +
    "/" +
    event.eventDate.substring(8, 10) +
    "/" +
    event.eventDate.substring(0, 4);

  return (
    <div className="event-card" >
      <div className="event-card-img">
        <img
          src={event.eventThumbnailImageUrl}
          className="event-card-image"
          alt={event.eventTitle}
        />
      </div>
      <div className="event-icons">
        <div
          className="icon-container"
          onClick={(e) => {
            e.stopPropagation();
            handleEditModalOpen();
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </div>
         <div
          className="icon-container"
          onClick={() => handleDeleteClick(event._id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
      <div className="event-card-info">
        <div className="event-card-text">
          <p className="event-text-title">{event.eventTitle}</p>
          <p className="event-text-details">{formattedDate} </p>
        </div>
        <div
          className="event-card-button"
          id="display_event_modal"
          onClick={handleEventModalOpen} // Open event modal when clicked
        >
          <svg viewBox="0 0 28 25" className="event-icon">
            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
          </svg>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={handleEditModalClose}
        contentLabel="Edit Event"
        style={customModalStyles}
      >
        <EditEvents
          closeModal={handleEditModalClose} // Pass closeModal function
          eventId={event._id}
          formData={formData}
          onEditSuccess={onEditSuccess}
        />
      </Modal>

      <Modal
        isOpen={isEventModalOpen}
        onRequestClose={handleEventModalClose}
        contentLabel="Event Details"
        style={customModalStyles}
      >
        <EventModal
          event={event}
          eventId={event._id}
          onClose={handleEventModalClose}
        />
      </Modal>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    eventThumbnailImageUrl: PropTypes.string.isRequired,
    eventTitle: PropTypes.string.isRequired,
    eventCategory: PropTypes.oneOf(["church", "outreach"]).isRequired,
    eventDate: PropTypes.string.isRequired,
    eventStartTime: PropTypes.string.isRequired,
    eventEndTime: PropTypes.string.isRequired,
    eventDescription: PropTypes.string.isRequired,
    eventHost: PropTypes.string.isRequired,
    eventLocation: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditSuccess: PropTypes.func, // Add this line for onEditSuccess
};

export default EventCard;
