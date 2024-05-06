import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          ParkFind
        </a>
        <span className="ms-1">&copy; 2024 </span>
      </div>
    </CFooter>
  );
};

export default AppFooter;
