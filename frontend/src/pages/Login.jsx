import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "../Store/States";
function Login() {
  const url = "http://localhost:5000";
  const { token } = useSelector((store) => store.states);

  const [currentstate, setCurrentstate] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHa = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({ ...data, [name]: value });
  };
  const formhandeler = async (e) => {
    e.preventDefault();

    // send data to server here
    try {
      const response = await axios.post(
        `${url}/api/user/${currentstate}`,
        data
      );
      dispatch(setToken(response.data.token));

      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={formhandeler}
      className="w-[90%] sm:max-w-96 flex flex-col items-center m-auto mt-14 gap-4 text-gray-800 "
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10  ">
        <p className="text-3xl "> {currentstate}</p>
        <hr className="h-[1.5px] border-none w-8 bg-gray-800" />
      </div>
      {/* sign up form */}

      {
        <div className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Username"
            className={`${
              currentstate === "login"
                ? "hidden"
                : "border-2 p-2 w-full rounded  border-gray-300 outline-none focus:ring-1 ring-blue-500 "
            }`}
            value={data.name}
            name="name"
            onChange={onChangeHa}
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 p-2 w-full rounded  border-gray-300 outline-none focus:ring-1 ring-blue-500 "
            value={data.email}
            name="email"
            onChange={onChangeHa}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 p-2 w-full rounded  border-gray-300 outline-none focus:ring-1 ring-blue-500 "
            value={data.password}
            name="password"
            onChange={onChangeHa}
          />
          <button
            className="w-full py-3 text-white bg-black rounded-md 
          "
          >
            {currentstate === "login" ? "Login" : "Sign In"}
          </button>
          <p className="text-center text-sm text-gray-600">
            Create New Account
            <span
              onClick={() => setCurrentstate("register")}
              className="cursor-pointer font-bold text-blue-300"
            >
              {currentstate === "login" ? "register" : ""}
            </span>
          </p>
        </div>
      }
    </form>
  );
}

export default Login;
