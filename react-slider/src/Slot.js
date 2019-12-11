import React from "react";

const style = {
  height: "100vh",
  width: "100%"
};
const Slot = props => {
  return (
    <div
      style={{ height: "100vh", width: "100%", backgroundColor: props.color }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default Slot;
