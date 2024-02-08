const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const{mongoose} = require('mongoose')

const app = express();
app.use(cors(
    {
        // origin: ["https://deploy-mern-1whq.vercel.app"],
        // methods: ["POST", "GET"],
        origin: 'http://localhost:5173',
        credentials: true
    }
))
app.use(express.json());

// mongoose.connect('mongodb+srv://nlswadmin01:NLSWdb1977@cluster0.o3qtadl.mongodb.net/test?retryWrites=true&w=majority')


// Connecting Mongoose :3
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not Connected :(' , err))

 

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

 

app.use('/auth', require('./routes/authRoutes'))
app.use('/eventvolunteer', require('./routes/eventVolunteer'))
app.use('/prayerrequests', require('./routes/prayerRoutes'));
app.use('/event', require('./routes/eventRoutes'));
app.use('/volunteer', require('./routes/volunteerRoutes'));
app.use('/connectgroup', require('./routes/connectgroupRoutes'));
app.use('/pastorial', require('./routes/pastorialRoutes'));


