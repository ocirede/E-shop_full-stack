import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendingEmail from "../utils/sendingEmail.js";
import {
  registerValidator,
  loginValidator,
} from "../validator/userValidator.js";

export const handleRegister = async (req, res) => {
  try {
    const { error, value } = registerValidator(req.body);
    if (error) {
      return res.status(400).json({ message: error.details });
    }
    const { username, email, password } = value;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashPassword });
    const verificationToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    await user.save();
    sendingEmail(verificationToken, user.email);
    res.json({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ error in Registering:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const handleSignIn = async (req, res) => {
  try {
    const { error, value } = loginValidator(req.body);
    if (error) {
      return res.status(400).json({ message: error.details });
    }
    const { password, username } = value;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("User not found");
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched || !user)
      return res.status(400).send("Wrong username or password");
    if (!user.verified)
      return res.send({
        success: false,
        error: "Email not verified",
      });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.json({ token, user });
  } catch (error) {
    console.log("🚀 ~ error in sigIn:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const confirmEmail = async (req, res) => {
  const token = jwt.verify(req.params.token, process.env.JWT_SECRET_KEY);

  try {
    if (token) {
      const user = await User.findByIdAndUpdate(
        token.id,
        { verified: true },
        { new: true }
      );
    }
    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in emailconfirm:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const fetchLoggedUser = async (req, res) => {
  try {
    const userId = req.user.id;
    // const userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { street, city, country, zipcode } = req.body;
    let image = undefined;
    if (req.file) {
      image = req.file.filename;
    }    
    console.log("userId", userId, req.body);
    console.log("req file", req.file);
    const profile = await User.findById(userId);
    if (image) {
      profile.image = image;
    }    
    profile.address.street = street;
    profile.address.city = city;
    profile.address.country = country;
    profile.address.zipcode = zipcode;
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.log(error);
  }
};
