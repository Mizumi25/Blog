const express = require("express")

const router = express.Router()

router.get("/contact", (req, res) => {
    res.send("Welcome Contact")
})

router.get("/home", (req, res) => {
    res.send("Welcome Home")
})

router.get("/about", (req, res) => {
    res.send("Welcome About")
})

router.get("/info", (req, res) => {
    res.send("Welcome Info")
})

router.get("/dashboard", (req, res) => {
    res.send("Welcome Dashboard")
})

module.exports = router