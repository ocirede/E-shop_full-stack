import axios from "../config/axios-auth.js";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const baseURL = import.meta.env.BASE_URL;


  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
        const response = await axios.get(baseURL + "/user/loggeduser");
        setUser(response.data);
        console.log("fetchedUser =====>", response.data);
     
    } else {
      // navigate("/");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    console.log(formdata)
    try {
      const {data: updatedProfile} = await axios.put(baseURL + `/user/updateprofile/${user._id}`, formdata);
      e.target.reset();
      setUser(updatedProfile);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setErrors(null);
    try {
      const newUser = await axios.post(baseURL + "/user/register", body);
      e.target.reset();
      setIsLoading(true);
      setTimeout(() => setIsSubmitted(true), 2000);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setErrors(null);

    } catch (err) {
      console.log(err);
      setErrors(err.response.data.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    setErrors(null);

    try {
      const { data: loggeduser } = await axios.post(baseURL + "/user/signin", body);
      localStorage.setItem("token", loggeduser.token);
      console.log("set token", loggeduser);
      e.target.reset();
      setUser(loggeduser);
      setErrors(null);
      console.log("loggedinuser",loggeduser);
      console.log("usestate user", user)
      window.location.replace("/");
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.message);

    }
  };

  const handeLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("ShoppingCart")
    navigate("/signin");
  };

  const handleredirect = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/signin");
    }, 3000);
  };

  return (
    <UserContext.Provider
      value={{
        handleRegistration,
        IsSubmitted,
        errors,
        handleSignIn,
        isLoading,
        setIsLoading,
        handeLogout,
        user,
        handleUpdate,
        handleredirect
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
