const express = require("express")
const pool = require("./db")
const bcrypt = require("bcrypt")
const cors = require("cors")

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("home")
})

app.post("/login", (req, res) => {
    console.log(req, "<-- req")
    res.send("login")
})

app.post("/user", (req, res) => {
    const {body: {email, password}} = req
    const hashedPassword = bcrypt.hashSync(password, 10)
    pool.query('INSERT INTO users (email, password) VALUES($1 $2) RETURNING *', [email, hashedPassword],
    (error, results) => {
        console.log(error, "<-- error")
        if(error) throw error
    })
    res.status(201).send("user created succesfully")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})