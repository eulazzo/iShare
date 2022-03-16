import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";

// import logo from "../assets/logowhite.png";
import logo from "../assets/whiteLogo.svg";

import { client } from "../client";

function Login() {
  const navigation = useNavigate();
  const TOKEN = process.env.REACT_APP_GOOGLE_API_TOKEN;

  const responseGoogle = ({ profileObj }) => {
    localStorage.setItem("user", JSON.stringify(profileObj));

    const { name, googleId, imageUrl } = profileObj;

    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };

    client
      .createIfNotExists(doc)
      .then(() => {
        navigation("/", { replace: true });
        console.log(doc);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen ">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover "
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <span className="text-white text-xl   ">
            Share your <strong className="text-red-700">BEST MOMENT</strong>{" "}
            with us!
          </span>
          <div className="p-5">
            <img src={logo} alt="logo shareme" width="130px" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4 " /> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
