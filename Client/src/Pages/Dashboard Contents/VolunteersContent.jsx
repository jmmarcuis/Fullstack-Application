import "./Dashboard Style/VolunteersContent.css";
import { useState } from "react";
import EventCard from "../Dashboard Contents/Dashboard Components/VolunteerCard";

const VolunteersContent = () => {

  const hardcodedVolunteerActivities = [
    { volunteerActivityId: 1, 
      volunteerActivityImage: "../src/assets/siteimages/donationpage/volunteerimg/musicandproduction.png",
      volunteerActivityName: "Music and Production",
      volunteerActivityDescription: "With our Music and Production Team at New Life Southwoods, you may express your creative potential while also serving a greater purpose. We are looking for passionate individuals that are fond of playing and singing instruments like guitar, drums, keyboard, bass, and vocals. ",
    },

    { volunteerActivityId: 2, 
      volunteerActivityImage: "../src/assets/siteimages/donationpage/volunteerimg/mediaandcreatives.png",
      volunteerActivityName: "Media and Creatives",
      volunteerActivityDescription: "Join our church's Media and Creatives Team to pursue your calling to serve the Lord. We are looking for people who are skilled in photography, camera operation, clicker mastery, OBS, and can manage social media using Photoshop and video editing.",
    },

    { volunteerActivityId: 3, 
      volunteerActivityImage: "../src/assets/siteimages/donationpage/volunteerimg/usher.png",
      volunteerActivityName: "Ushers",
      volunteerActivityDescription: "Serve the Lord by greeting visitors with a warm smile, maintaining the peace of our church community, or providing your medical expertise to help those in need.",
    },

    { volunteerActivityId: 4, 
      volunteerActivityImage: "../src/assets/siteimages/donationpage/volunteerimg/securityteam.png",
      volunteerActivityName: "Security",
      volunteerActivityDescription: "Serve the Lord by greeting visitors with a warm smile, maintaining the peace of our church community, or providing your medical expertise to help those in need.",
    },
    
    { volunteerActivityId: 5, 
      volunteerActivityImage: "../src/assets/siteimages/donationpage/volunteerimg/medicalteam.png",
      volunteerActivityName: "Medical Team",
      volunteerActivityDescription: "Serve the Lord by greeting visitors with a warm smile, maintaining the peace of our church community, or providing your medical expertise to help those in need.",
    },
  ];

  const [volunteerActivities] = useState(hardcodedVolunteerActivities);

  return (
    <>
      <div className="vp-header-container">
        <h1 className="vp-header-title">VOLUNTEERS</h1>
      </div>
      <div className="vp-event-container">
        <div className="vp-header-wrapper">
          <h2 id="vp-events-heading">Choose an Event</h2>
        </div>
        <div className="vp-event-wrapper">
          {volunteerActivities.map((volunteerActivity) => (
              <EventCard key={volunteerActivity.volunteerActivityId} 
              volunteerActivity={volunteerActivity}
              volunteerActivities={volunteerActivities}
              />
          ))}
        </div>
      </div>

    </>
  );
};


export default VolunteersContent;
