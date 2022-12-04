// const express = require("express");
// const app = express();

// const React = require("react");
// const renderToSring = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;

import express from "express";
import renderer from "./helpers/renderer";

const app = express();

//để thêm js và log được ra màn hình browser
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("RENDER HOME COMPONENT TO STRING");
  res.send(renderer());
});

app.listen(3000, () => {
  console.log("SERVER đã chạy ở port 3000");
});
