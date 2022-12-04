import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

console.log("Dùng DOM render lên browser");
ReactDOM.render(<Home />, document.querySelector("#root"));
