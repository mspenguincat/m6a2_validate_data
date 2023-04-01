import express from "express";
import mongoose from "mongoose";
import bankAccountRoutes from "./routes/bankAccountRoutes";

(async function () {
  const app = express();

  // Connect to MongoDB database using Mongoose
  await mongoose.connect("mongodb://localhost:27017/bank-accounts", {});
  console.log("Connected to MongoDB database");

  // Configure middleware
  app.set("view engine", "ejs");
  app.set("views", "src/views");
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));

  // Configure routes
  app.use("/bankAccounts", bankAccountRoutes);

  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})();
