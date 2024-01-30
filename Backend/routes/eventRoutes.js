const express = require("express");
const router = express.Router();
const cors = require("cors");
 const { createEvent, uploadThumbnail, getEvents     } = require("../controllers/eventController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
 
router.post("/createevent", createEvent);
router.get("/getevents", getEvents);
 router.post("/uploadthumbnail", uploadThumbnail, (req, res) => {
  
 
});

module.exports = router;
