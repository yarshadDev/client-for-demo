import axios from "axios";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const initialState = { username: "", password: "" };

  const navigate = useNavigate();

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeUsername":
        return { ...state, username: action.payload };
      case "changePassword":
        return { ...state, password: action.payload };
      default:
        console.log("IDK how we came to default");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const registerFunction = async (state) => {
    try {
      await axios.post("http://localhost:3001/register", {
        username: state.username,
        password: state.password,
      });
      // localStorage.setItem("token", x.data.token);
      navigate("/login");
    } catch (error) {
      console.log(
        `So we have an error that is ${error} and the error message is ${error.response.data.message}`
      );
    }
  };

  return (
    <div className="flex flex-row-reverse items-center justify-center w-full h-screen bg-gradient-to-tr from-blue-900 to-blue-500">
      <div
        style={{ backgroundImage: `url("https://tinyurl.com/ycx9ydje")` }}
        className="z-10 flex flex-col items-center w-full mx-3 overflow-hidden bg-blue-600 bg-center bg-cover rounded shadow-md bg-image sm:w-1/2 md:w-9/12 lg:w-1/2 md:mx-5 lg:mx-0 md:flex-row-reverse"
      >
        <div className="flex flex-col items-center justify-center w-full bg-blue-600 bg-opacity-25 md:w-1/2 backdrop">
          <h1 className="my-2 text-3xl font-extrabold text-white md:text-4xl md:my-0">
            Authentication Signup
          </h1>
          <p className="hidden mb-2 font-mono text-white md:block">
            Let's Signup here mates
          </p>
        </div>
        <div className="flex flex-col items-center w-full px-4 py-5 bg-white md:w-1/2 md:py-8">
          <h3 className="flex items-center mb-4 text-3xl font-bold text-blue-500">
            Register
          </h3>
          <form
            action="#"
            className="flex flex-col items-center justify-center w-full gap-3 px-3"
          >
            <input
              type="email"
              placeholder="email.."
              className="w-full px-4 py-2 text-base placeholder-gray-500 placeholder-opacity-50 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                dispatch({ type: "changeUsername", payload: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="password.."
              className="w-full px-4 py-2 text-base placeholder-gray-500 placeholder-opacity-50 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                dispatch({ type: "changePassword", payload: e.target.value });
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                registerFunction({
                  username: state.username,
                  password: state.password,
                });
              }}
              className="flex items-center justify-center px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
            >
              <svg
                className="inline w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
              <p className="ml-1 text-lg">Sign-Up</p>
            </button>
          </form>
          <p className="mt-2 text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              className="mt-3 font-bold text-green-500 underline hover:text-green-600 focus:outline-none"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
