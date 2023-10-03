import { Strings } from "Resource/Strings";
import React from "react";

const Loader = () => {
  const styles = {
    borderRadius: "0.475rem",
    boxShadow: "0 0 50px 0 rgb(82 63 105 / 15%)",
    backgroundColor: "light gray",
    color: "black",
    fontWeight: "500",
    margin: "0",
    width: "auto",
    top: "calc(50%)",
    padding: "1rem 2rem",
    transform: "translateX(-50%)",
    left: "calc(50%)",
  };

  return (
    <div style={{ ...styles, position: "absolute", textAlign: "center" }}>
      {Strings.processing}
    </div>
  );
};

export { Loader };
