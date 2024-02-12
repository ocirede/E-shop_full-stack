import express from "express";
import {
  confirmEmail,
  fetchLoggedUser,
  handleRegister,
  handleSignIn,
  updateProfile
} from "../controllers/userController.js";
import auth from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const authRoutes = express.Router();

authRoutes.post("/register", handleRegister);
authRoutes.post("/signin", handleSignIn);
authRoutes.post("/emailconfirm/:token", confirmEmail);
authRoutes.get("/loggeduser", auth, fetchLoggedUser);
authRoutes.put("/updateprofile/:userId", upload.single("profilePicture"), updateProfile)

export default authRoutes;
