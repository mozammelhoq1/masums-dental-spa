import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { serviceId } = useParams();
  return (
    <div className="text-center my-5">
      <h1 className="text-primary mb-5">welcome CheckOut</h1>
      <h2>Appointment id : {serviceId}</h2>
    </div>
  );
};

export default CheckOut;
