import React, { useState } from "react";
import "./FloatingActionButton.css";
import { Popover } from "antd";
import { IoChatboxEllipses } from "react-icons/io5";

const FloatingActionButton: React.FC = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleFabClick = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  const content = (
    <div className="chatbot-content flex flex-col justify-center items-center h-full">
      <p className="font-text-xs-medium">Chatbot content...</p>
    </div>
  );

  return (
    <>
      <Popover
        content={content}
        title="Chatbot"
        trigger="click"
        open={isPopoverVisible}
        onVisibleChange={setIsPopoverVisible}
        placement="topRight"
        arrowPointAtCenter
      >
        <button className="fab" onClick={handleFabClick}>
          <IoChatboxEllipses size={24} />
        </button>
      </Popover>
    </>
  );
};

export default FloatingActionButton;
