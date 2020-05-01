const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

app.use(express.json({ limit: '10kb' }));

app.use(express.static(`${__dirname}/public`));

app.use('/api/user', userRoutes);
app.use('/api/cars', carRoutes);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
