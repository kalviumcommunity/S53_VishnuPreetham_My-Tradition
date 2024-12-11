import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationSuccess from "../../Assets/Animation - 1721981380336.json";
import OrderConfirmation from "./OrderConfirmed";

const Paymentsuccess = () => {
  const [page, setPage] = useState(false);


  const Animation = {
    loop: false, 
    autoplay: true,
    animationData: animationSuccess,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(true); 
    }, 3); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      
        <OrderConfirmation />
      {/* )} */}
    </div>
  );
};
export default Paymentsuccess;