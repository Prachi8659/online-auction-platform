import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./src/models/user.model.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/E-auction";

async function createOrPromoteAdmin() {
  const args = process.argv.slice(2);
  const email = (args[0] || "admin@eauction.com").trim().toLowerCase();
  const password = args[1] || "admin123";
  const fullName = (args[2] || "Admin User").trim();

  try {
    console.log(`Connecting to MongoDB at: ${MONGODB_URI}...`);
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully.");

    let user = await User.findOne({ email });

    if (user) {
      console.log(`Found existing user with email: ${email}`);
      user.userType = "admin";
      user.paymentVerified = true;
      user.password = password; // Will be hashed by pre('save') hook
      await user.save();
      console.log(`\n Successfully promoted existing user to ADMIN:`);
      console.log(`- Email: ${user.email}`);
      console.log(`- Full Name: ${user.fullName}`);
      console.log(`- userType: ${user.userType}`);
    } else {
      console.log(`Creating new Admin user with email: ${email}...`);
      user = await User.create({
        fullName,
        email,
        password, // Will be hashed by pre('save') hook
        userType: "admin",
        paymentVerified: true,
      });
      console.log(`\n Successfully created new ADMIN account:`);
      console.log(`- Email: ${user.email}`);
      console.log(`- Full Name: ${user.fullName}`);
      console.log(`- userType: ${user.userType}`);
      console.log(`- Password: ${password}`);
    }

    console.log("\nYou can now login with these credentials at /admin/login or /login");
  } catch (error) {
    console.error("Error creating/promoting admin:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
    process.exit(0);
  }
}

createOrPromoteAdmin();
