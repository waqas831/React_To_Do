import React, { useState } from "react";
import Layout from "./Layout";
import { IoAdd } from "react-icons/io5";

const Myinput = () => {
  const [value, SetValue] = useState("");
  const [allValues, SetAllValues] = useState([]);
  const textValue = (e) => {
    //const myvalue = e.target.value;
    SetValue(e.target.value);
  };
  const add = () => {
    SetAllValues([...allValues, value]);
    SetValue("");
  };

  return (
    <>
      <div className="center_input">
        <label className="input_label">Enter Your Task: </label>
        <input
          type="text"
          placeholder="Enter Your Task"
          className="input_input"
          onChange={textValue}
          value={value}
        />
        <button className="input_btn" onClick={add}>
          <IoAdd className="icon_add" />
        </button>
      </div>
      <div>
        <Layout
          allValueGet={allValues}
          setvalue={SetAllValues}
          h_value={value}
          s_value={SetValue}
          textvalue={textValue}
        />
      </div>
      <div></div>
    </>
  );
};

export default Myinput;
