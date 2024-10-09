import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "../components/user-card";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/button";
import { FaSpinner } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [info, setInfo] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      const token = sessionStorage.getItem("accessToken");

      if (token) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setInfo(response.data);
        } catch (error) {
          console.error("API call failed", error);
        }
      }
    };

    fetchInfo();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken"); 
    navigate("/"); 
  };

  if (!info)
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen mx-auto">
       <FaSpinner className="animate-spin-slow"/> <p>Loading...</p>
      </div>
    );

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen mx-auto pt-12">
      <img
        src="/images/vector.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-full z-0"
      />
      <div className="absolute inset-0 bg-white opacity-70 rounded-full z-0"></div>
      <h1 className="mb-3 font-bold z-10">
        Welcome {info.first_name} {info.last_name}
      </h1>
      <UserCard user={info} />
      <Button
        variant="danger"
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded z-10"
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
