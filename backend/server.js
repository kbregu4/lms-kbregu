const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Serveri po funksionon në portin ${PORT}`);
});
