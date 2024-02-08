import "./Dashboard Style/VolunteersContent.css";
import { useState } from "react";
import EventCard from "../Dashboard Contents/Dashboard Components/ConnectgroupCard";


const ConnectGroupsContent = () => {
  const hardcodedConnectgroupActivities = [
    { connectgroupActivityId: 1,
      connectgroupActivityImage: "../src/assets/siteimages/donationpage/connectimg/yc.png",
      connectgroupActivityName: "Youth Connect",
      connectgroupActivityDescription: "See the Youth Connect participants.",
    },

    { connectgroupActivityId: 2, 
      connectgroupActivityImage: "../src/assets/siteimages/donationpage/connectimg/jc.png",
      connectgroupActivityName: "Jubilant Connect",
      connectgroupActivityDescription: "See the Jubilant Connect participants.",
    },

    { connectgroupActivityId: 3, 
      connectgroupActivityImage: "../src/assets/siteimages/donationpage/connectimg/gc.png",
      connectgroupActivityName: "Gatekeeper Connect",
      connectgroupActivityDescription: "See the Gatekeeper Connect participants.",
    },

    { connectgroupActivityId: 4, 
      connectgroupActivityImage: "../src/assets/siteimages/donationpage/connectimg/cc.png",
      connectgroupActivityName: "Couples Connect",
      connectgroupActivityDescription: "See the Couples Connect participants.",
    },
    
    { connectgroupActivityId: 5, 
      connectgroupActivityImage: "../src/assets/siteimages/donationpage/connectimg/bc.png",
      connectgroupActivityName: "Basketball",
      connectgroupActivityDescription: "See the Basketball participants.",
    },
  ]; 

  const [connectgroupActivities] = useState(hardcodedConnectgroupActivities);

  return (
    <>
      <div className="vp-header-container">
        <h1 className="vp-header-title">CONNECT GROUPS</h1>
      </div>
      <div className="vp-event-container">
        <div className="vp-header-wrapper">
          <h2 id="vp-events-heading">Choose an Event</h2>
        </div>
        <div className="vp-event-wrapper">
          {connectgroupActivities.map((connectgroupActivity) => (
              <EventCard key={connectgroupActivity.connectgroupActivityId} 
              connectgroupActivity={connectgroupActivity}
              connectgroupActivities={connectgroupActivities}
              />
          ))}
        </div>
      </div>

    </>
  );
};

export default ConnectGroupsContent;
