const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true
}));

app.use('/api/auth', require('./routes/authRoutes'));
// Serve uploaded files statically (optional, useful to access files via URL)
app.use('/uploads', express.static(process.env.UPLOAD_DIR || 'uploads'));
app.use('/api', require('./routes/apiRoutes'));

app.get('/', (req, res) => {
    res.json({ message: 'CareerGPT API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
