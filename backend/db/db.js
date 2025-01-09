const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `mongodb connected: ${(conn, mongoose.connection.host)}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;
