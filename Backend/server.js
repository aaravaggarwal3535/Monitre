import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import SignupData from './models/SignupData.js'
import EmailData from './models/emailToIdData.js'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

let Monitre = await mongoose.connect("mongodb://127.0.0.1:27017/UserData")

app.get('/', (req, res) => {
    res.send('HI')
})

app.post('/signup',async (req, res) => {
    const emailVerifier = await EmailData.find({email: req.body.email})
    if (emailVerifier.length > 0) {
        res.send('Email Existed')
    }
    else {
        const newUser = await SignupData.create(req.body)
        const newEmail = await EmailData.create({email: req.body.email, id: newUser._id})
        res.send('User Created')
    }
})

app.post('/login', async (req, res) => {
    const loginData = await SignupData.find({email: req.body.email, password: req.body.password})
    if (loginData.length > 0) {
        const id = await EmailData.find({email: req.body.email})
        res.send(id)
    }
    else {
        res.send('Login Failed')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})