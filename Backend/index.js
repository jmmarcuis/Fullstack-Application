const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const{mongoose} = require('mongoose')

const app = express();
app.use(express.json());



// Connecting Mongoose :3
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not Connected :(' , err))

 

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

 

app.use('/auth', require('./routes/authRoutes'))
app.use('/prayerrequests', require('./routes/prayerRoutes'));
app.use('/event', require('./routes/eventRoutes'));
app.use('/volunteer', require('./routes/volunteerRoutes'));
app.use('/connectgroup', require('./routes/connectgroupRoutes'));

