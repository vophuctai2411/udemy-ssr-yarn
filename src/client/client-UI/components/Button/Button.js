//import "./button.css";
import React from "react";

function Button({ content, children }) {
  return (
    <div className="button-background">
      {content} {children}
    </div>
  );
}

export default Button;
