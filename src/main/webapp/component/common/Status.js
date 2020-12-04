import React from "react";
import okLogo from "./OK.png";
import unknownLogo from "./UNKNOWN.png";
import failLogo from "./FAIL.png";

const Status = ({ status }) => {
    let logo = failLogo;
    if(status === "OK") {
        logo = okLogo;
    } else if (status === "UNKNOWN") {
        logo = unknownLogo;
    } else {
        logo = failLogo;
    }

   return(
       <img src={logo} alt="status" className="status-logo"/>
        );

};
export default Status;