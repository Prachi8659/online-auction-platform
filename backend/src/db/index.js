// import mongoose from "mongoose";
// // In your server.js file or wherever you set up your Mongoose connection

// import "../models/bid.model.js";
// import "../models/city.model.js";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}`
//     );
//     console.log("Connected to DB", `${connectionInstance.connection.host}`);
//   } catch (error) {
//     console.error("err", error);

//     throw error;
//   }
// };

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/E-auction";
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

export default connectDB;
