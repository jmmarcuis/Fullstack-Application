const pastorialModel = require("../models/pastorial");
const { hashString } = require("../helper/iphash");

async function pastorial(req, res) {
  try {
    const { name, date, pastorialText } = req.body;

    if (!name || !date || !pastorialText) {
      return res.json({
        error: "Name, Date, and Textbox are required",
      });
    }

    // Get the user's IP address
    const userIP = req.ip;

    // Hash the user's IP address before sending to the database
    const hashedIP = hashString(userIP);

    // Check if the user has made a pastorial in the last 5 minutes
    const lastPastorial = await pastorialModel.findOne({
      userIPHash: hashedIP,
      createdAt: { $gt: new Date(Date.now() - 5 * 60 * 1000) },
    });

    if (lastPastorial) {
      return res.json({
        error: "You can make only one pastorial care every 5 minutes",
      });
    }

    // Create a new pastorial care with the hashed IP
    const newPastorial = await pastorialModel.create({
      userIPHash: hashedIP,
      name,
      date,
      pastorialText,
    });

    return res.json(newPastorial);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getPastorial(req, res) {
  try {
    // Fetch all pastorial from the database
    const pastorial = await pastorialModel.find();

    // Respond with the fetched pastorial
    res.json(pastorial);
  } catch (error) {
    console.error("Error fetching pastorial:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function markPastorialAsRead(req, res) {
  const requestId = req.params.id;

  try {
    const updatedRequest = await pastorialModel.findByIdAndUpdate(
      requestId,
      { $set: { readStatus: true } },
      { new: true }
    );

    res.json(updatedRequest);
  } catch (error) {
    console.error("Error marking pastorial care as read:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deletePastorial(req, res) {
  const requestId = req.params.id;

  try {
    // Find and delete the pastorial care with the given ID
    const deletedRequest = await pastorialModel.findByIdAndDelete(requestId);

    if (!deletedRequest) {
      return res.status(404).json({ error: "pastorial care not found" });
    }

    res.json({ message: "pastorial care deleted successfully", deletedRequest });
  } catch (error) {
    console.error("Error deleting pastorial:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  pastorial,
  markPastorialAsRead,
  getPastorial,
  deletePastorial,
};
