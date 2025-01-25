import axios from "axios";
import bgimage from "../assets/png/background_img.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState("");
  const data = {
    email: email,
    password: password,
  };
  const expirationTimeInHours = 2;
  const expirationTime = Date.now() + expirationTimeInHours * 60 * 60 * 1000;
  // Api endpoints
  const loginURL = "https://portal.rsubs.org/api/users/login";
  // const fetchUsersURL = "https://portal.rsubs.org/api/users";
  // const adminUrl = "https://portal.rsubs.org/api/users/admin";
  // const studentUrl = "https://portal.rsubs.org/api/users/student";
  // const fetchUserURL = `https://portal.rsubs.org/api/users/${userId}`;
  // const fetchAllUsers = 'https://portal.rsubs.org/api/users';

  //decode token to get user role and id and navigate to dashboard
  const decodeToken = (token) => {
    const reponse = jwtDecode(token);

    localStorage.setItem("_id", reponse.userId);

    localStorage.setItem("role", reponse.role);

    const role = localStorage.getItem("role");

    role === "student" && navigate("/student");

    role === "admin" && navigate("/admin");
  };

  //on form submit get token

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      localStorage.setItem("email", data.email);
      localStorage.setItem("tokenExpirationTime", expirationTime);
      const loginEmail = localStorage.getItem("email");
      console.log(`email login:${loginEmail}`);

      setIsLoading(true);

      try {
        const getResponse = await axios.post(loginURL, data);

        //set token
        localStorage.setItem("token", getResponse.data.token);

        // post request to return a token and get token
        const token = localStorage.getItem("token");
        console.log(`login token:${token}`);

        setIsLoading(false);
        decodeToken(token);
      } catch (error) {
        console.log(error);
        setToast(error.reponse.data.message);
        setIsLoading(false);
        // navigate('/error')
      }
    }
  };

  return (
    <div
      className="h-full flex justify-center relative py-5"
      style={{
        // backgroundImage: `url(${bgimage})`,
        // backgroundRepeat: "no-repeat",
      }}>
      <div className="bg-[#F3F1F1]  p-10 shadow-md shadow-gray-500 rounded-[1em]">
        {isLoading && (
          <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full absolute top-[50%] left-[47%] ">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}

        {toast && (
          <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full absolute top-[50%] left-[47%] ">
            <p>{toast}</p>
          </div>
        )}

        <h3 className="text-center text-[36px] text-[#39447F] font-black">
          Log in
        </h3>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div>
            <div>
              {" "}
              <label className="my-2 cursor-pointer" htmlFor="email">
                Email{" "}
              </label>
            </div>

            <input
              className="w-full p-4 my-2 bg-white outline-none  "
              id="email"
              type="email"
              required
              placeholder="Email*"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
            />
          </div>

          <div>
            <div>
              <label className="my-2 cursor-pointer" htmlFor="password">
                Password{" "}
              </label>
            </div>

            <input
              className="w-full p-4 my-2 bg-white outline-none"
              id="password"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
            />
          </div>

          <button
            type="submit"
            className="bg-[#39447F] w-full py-2 text-center my-3 rounded text-white hover:bg-[#39449F] ">
            Submit
          </button>
          <p className="text-[#39447F] text-[1em] text-center hover:underline cursor-pointer hover:text-[#39449F] ">
            Don’t have an account?{" "}
            <Link to="/register">
              <span className="font-bold">Create profile</span>{" "}
            </Link>
          </p>

          <p className="text-[#39447F] text-[1em] text-center hover:underline cursor-pointer hover:text-[#39449F] ">
            <Link to="/reset_password">Forgot Your Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
