const express = require("express")
const router = require("./routers/post.route.js")
const { Server } = require("http")
const app = express()

app.use(router)

app.listen(4000,() =>{
    console.log("server started!")
})
