import React from "react";

type LogoProps = {
  name: string;
};

const Logo: React.FC<LogoProps> = ({ name }) => {
  return (
    <div className="logo">
      <div className="logo-title">guitar-paradise</div>
      <div className="logo-name">{name}</div>
    </div>
  );
};

export default Logo;
