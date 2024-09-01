const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

// Middleware and Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser());

// View Engine
app.set('view engine', 'ejs');

// Livereload Setup
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLivereload());

// Routes
const prductrouts = require("./route/pruductroute");
const userrout = require("./route/userrout");
app.use("/products", prductrouts); // Assuming product routes are under /products
app.use("/users", userrout); // Assuming user routes are under /users

// Server Listening
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
