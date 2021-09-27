const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const path = require('path');

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/user', require('./routes/router'));


if (process.env.NODE_ENV === "production") {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`SERVER RUNNING A ${process.env.NODE_ENV} MODE ON PORT ${process.env.PORT}`.bgYellow.bold);
})
