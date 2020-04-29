require('dotenv').config();

const app = require('./app');
require('./db/database');

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
