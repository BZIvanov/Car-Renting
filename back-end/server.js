require('dotenv').config();

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception! Shutting down node process...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

require('./db/database');

const PORT = process.env.PORT || 3100;
const server = app.listen(PORT, () => {
  console.log(
    `App listening in ${process.env.NODE_ENV} mode on port ${PORT}...`
  );
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection! Shutting down server and node...');
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});
