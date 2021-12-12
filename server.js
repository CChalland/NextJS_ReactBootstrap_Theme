const express = require("express");
const next = require("next");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = app.getRequestHandler();
// const routes = require("./routes");
// const cors = require("cors");

// Without express
const { createServer } = require("http");
app.prepare().then(() => {
	createServer(handler).listen(3000, (err) => {
		if (err) throw err;
		console.log("Ready on localhost:3000");
	});
});
