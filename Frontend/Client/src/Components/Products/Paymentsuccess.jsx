import React from "react";
import Lottie from "react-lottie";
import animationSuccess from "../../Assets/Animation - 1721981380336.json"
const Paymentsuccess = () => {
  const Animation = {
    loop: true,
    autoplay: true,
    animationData: animationSuccess,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="lottiesanimation">
        <Lottie options={Animation} height={200} width={200} />
      </div>
    </div>
  );
};

export default Paymentsuccess;
