import React from "react";

const Status = ({ status }) => {
    let colorCode = "red";
    if(status === "OK") {
        colorCode = "green";
    } else if (status === "UNKNOWNstrokeWidth") {
        colorCode = "orange";
    } else {
        colorCode = "red";
    }

   return(
       <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="" strokeWidth="3" fill={colorCode} />
        Sorry, your browser does not support inline SVG.
       </svg> );

};
export default Status;