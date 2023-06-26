var express = require("express");
var middleware = express();
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");

middleware.use(logger("dev"));
middleware.use(express.json());
middleware.use(express.urlencoded({ extended: false }));
middleware.use(cookieParser());
middleware.use(express.static(path.join(__dirname, "public")));

module.exports = middleware;
