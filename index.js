const express = require("express")
const db = require("./db");
const authController = require("./controllers/auth.Controller");

const app = express()


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})



app.post ('/register', authController.register);