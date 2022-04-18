import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>welcome {serviceId}</h1>
    </div>
  );
};

export default CheckOut;
