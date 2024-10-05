const express = require("express")
const router = require("./router/post.route.js")

const app = express()
app.use(router)

app.listen(4000, () => {
    console.log("Server Starter")
})