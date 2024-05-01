const connectDB = require('./db');
const app = require('./app');

connectDB();

app.listen(8000, () => {
  console.log('Server is running');
});
