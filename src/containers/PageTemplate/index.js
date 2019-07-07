import React from "react";
import MainMenu from "../../components/Menu";
import User from "../../components/User";

const PageTemplate = ({ children }) => {
  return (
    <div>
      <User />
      <MainMenu />
      {children}
    </div>
  );
};

export default PageTemplate;
