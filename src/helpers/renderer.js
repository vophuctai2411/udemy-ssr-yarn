import React from "react";
//import { renderToSring } from "react-dom/server";
import Home from "../client/components/Home";
const renderToSring = require("react-dom/server").renderToString;

export default () => {
  const content = renderToSring(<Home />);

  return `
<html>
<head><link rel="stylesheet" type="text/css" href="./myGlobal.css" /></head>
<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
</html>`;
};
