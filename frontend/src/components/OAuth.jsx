import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth";
import {signInSuccess} from "../redux/user/userSlice.js";
import {app} from "../firebase.js";
import axios from "axios";


const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const { data } = await axios.post(`/api/auth/google`, {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with Google", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleClick}
        className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 w-full"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
