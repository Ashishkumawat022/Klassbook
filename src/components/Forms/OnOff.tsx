import React from "react";
import st from "../../style.module.scss";


const OnOff = () => {
  return (
    <>
      <input type="checkbox" />
      <span className={`${st.slider}`}></span>
    </>
  );
};

export default OnOff;
