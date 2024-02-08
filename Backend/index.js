const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();

cloudinary.config({
  cloud_name: "drf4qnjow",
  api_key: "249231458141395",
  api_secret: "9SA6cpTEdiZpaFt0XwoelOtwhVQ",
});

// Configure Multer storage to upload files directly to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", 
    allowed_formats: ["jpg", "jpeg", "png"], 
   },
});


const upload = multer({ storage: storage });

app.use(
  cors({
    // origin: ["https://deploy-mern-1whq.vercel.app"],
    // methods: ["POST", "GET"],
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// mongoose.connect('mongodb+srv://nlswadmin01:NLSWdb1977@cluster0.o3qtadl.mongodb.net/test?retryWrites=true&w=majority')

// Connecting Mongoose :3
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not Connected :(", err));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/auth", require("./routes/authRoutes"));
app.use("/eventvolunteer", require("./routes/eventVolunteer"));
app.use("/prayerrequests", require("./routes/prayerRoutes"));
app.use("/event", require("./routes/eventRoutes"));
app.use("/volunteer", require("./routes/volunteerRoutes"));
app.use("/connectgroup", require("./routes/connectgroupRoutes"));
app.use("/pastorial", require("./routes/pastorialRoutes"));
