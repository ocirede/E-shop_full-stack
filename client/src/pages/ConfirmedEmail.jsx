import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../config/api";
import { useUserContext } from "../context/UserContext";

export default function ConfirmedEmail() {
  const { handleredirect } = useUserContext();

  const { token } = useParams();

  console.log("useeffect toke", token);
  useEffect(() => {
    try {
      if (token) {
        const fetchData = async () => {
          const response = await axios.post(
            baseURL + "/user/emailconfirm/" + token
          );
          console.log("🚀 ~ response:", response);
        };

        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="bg-slate-200 flex justify-center items-center h-screen">
        <div className=" text-3xl bg-slate-50 h-48 w-2/5 flex items-center justify-center shadow-xl">
          <h1>
            Your email was successfully verified click{" "}
            <Link
              onClick={handleredirect}
              to="/signin"
              className=" text-blue-600"
            >
              here
            </Link>{" "}
            to sign-in
          </h1>
        </div>
      </div>
    </>
  );
}
