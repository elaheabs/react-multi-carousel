import * as React from "react";

const CustomDot = ({ onClick, active, index, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    <li
      className="custom-dot"
      style={{ background: active ? "grey" : "initial" }}
    >
      <button
        style={{ background: active ? "grey" : "initial" }}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default CustomDot;
