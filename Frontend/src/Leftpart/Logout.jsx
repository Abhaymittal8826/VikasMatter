import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuth } from "../context/Authprovider";
function Logout() {
  const [authUser,setAuthUser] = useAuth();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8800/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      // setAuthUser(null);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
    }
  };

  return (
    <>
         <button  onClick={handleLogout}>Logout</button>
      
    </>
  );
}

export default Logout;