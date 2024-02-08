const express = require("express");
const router = express.Router();
const cors = require("cors");

const { pastorial, getPastorial, markPastorialAsRead, deletePastorial,} = require("../controllers/pastorialController");

// MIDDLEWARE FOR CONNECTING THE ENDPOINTS BETWEEN FRONT END AND BACK END
router.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

router.post("/addpastorial", pastorial);
router.get("/getpastorial", getPastorial);
router.post("/markpastorial/:id", markPastorialAsRead);
router.delete("/deletepastorial/:id", deletePastorial);
module.exports = router;
