const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/AuthRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 1234;

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
connectDB();
app.use(express.json());

app.use('/api', authRoutes);
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
