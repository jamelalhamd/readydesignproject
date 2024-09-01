//const AuthUser = require("../models/authUser");
var moment = require("moment");
var jwt = require("jsonwebtoken");


const errorcontroller = (req, res) => { req.render("404")  }
const addcontroller = (req, res) => { req.render("add") }
const covercontroller = (req, res) => { req.render("cover") }
const dashcontroller = (req, res) => {req.render("dashboard")  }
const editcontroller = (req, res) => { req.render("edit") }
const homecontroller = (req, res) => { req.render("home") }
const viewcontroller = (req, res) => { req.render("view") }

module.exports = {
    errorcontroller,
    addcontroller,
    covercontroller,
    dashcontroller,
    editcontroller,
    homecontroller,
 
    viewcontroller}


























