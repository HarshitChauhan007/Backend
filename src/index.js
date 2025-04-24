const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routers/userRouter');
const sequelize = require('./config/database');
const User = require('./models/user');
require('dotenv').config(); // must be at the top!


dotenv.config();

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true })); // Required for form data


app.use('/api/users', userRouter);

sequelize.sync() // Sync Sequelize models to DB
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
