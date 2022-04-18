import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error) {
    errorElement = (
      <p className="text-danger my-3"> Error : {error?.message}</p>
    );
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "2px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div>
        <Button
          onClick={() => signInWithGoogle()}
          variant="secondary"
          className="btn btn-sm d-block mx-auto"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-3">Sign In With Google</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
