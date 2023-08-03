import React from "react";
import st from "../../style.module.scss";


const Radio = () => {
  return (
    <>
      <input type="radio" />
      <span className={`${st.checkmark}`}></span>
    </>
  );
};

export default Radio;
