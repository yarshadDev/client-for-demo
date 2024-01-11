import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function User() {
  const navigate = useNavigate();

  const x = localStorage.getItem("token");
  const [decodedToken, setdecodedToken] = useState(jwt_decode(x));

  const logoutFunction = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600">
      <div className="flex justify-center">
        <div className="block max-w-sm p-6 bg-white rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
            Username is {decodedToken.user}
          </h5>
          <p className="mb-4 text-base text-gray-700"></p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={logoutFunction}
          >
            Sign-Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
