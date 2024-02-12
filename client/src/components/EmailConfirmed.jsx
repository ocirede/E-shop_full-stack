import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../config/api";
export default function EmailConfirmed() {
    const { token } = useParams();
    useEffect(() => {
        if (token) {
          const fetchData = async () => {
            const response = await axios.post(
                baseURL + "/user/emailconfirm/" + token
            );
            console.log("🚀 ~ response:", response);
              };
    
          fetchData();
        }
      }, []);
  
}
