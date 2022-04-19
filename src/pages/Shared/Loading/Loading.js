import React from "react";
import { SpinnerDiamond, SpinnerDotted } from "spinners-react";

const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center my-5">
      <SpinnerDiamond size={150} color="secondary" speed={100} />
    </div>
  );
};

export default Loading;
