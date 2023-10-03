import React, { FC } from "react";

interface PopupMessageProps {
  message: string;
}

const PopupMessage: FC<PopupMessageProps> = ({ message }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PopupMessage;
