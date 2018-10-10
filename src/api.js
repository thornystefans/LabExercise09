// src/api.js
const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {
	var result = greeting(req.params.name);
	res.status = 200;
	if(req.params.name == "_") {
		res.sendStatus(res.status);
	}
	else {
		res.send({ greeting: result });
	}
});

module.exports = app;
