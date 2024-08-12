// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/admin-panel')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a Schema and Model
const formDataSchema = new mongoose.Schema({
    headerMenu: String,
    heroBackground: String,
    headline: String,
    subHeadline: String,
    ctaButtons: String,
    featuresList: String,
    aboutText: String,
    productsList: String,
    testimonialsList: String,
    newsList: String,
    caseStudiesList: String,
    statisticsList: String,
    portfolioList: String,
    eventsList: String,
    contactInfo: String,
    footerLinks: String,
    socialMedia: String,
    newsletterSignup: String,
});

// Create a model for the collection
const FormData = mongoose.model('FormData', formDataSchema);

// API Endpoints
app.post('/api/formdata', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save(); // Save data to the formdata collection
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error });
    }
});

app.get('/api/formdata/:id', async (req, res) => {
    try {
        const data = await FormData.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
