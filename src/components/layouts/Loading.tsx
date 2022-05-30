import React from "react";
import { Bars } from "react-loader-spinner";

const Loading: React.FC = () => {
  return (
    <div className="loading-page">
      <Bars height={75} width={75} color="rgb(255, 101, 252)" />
    </div>
  );
};

export default Loading;
