import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import SignupData from './models/SignupData.js'
import EmailData from './models/emailToIdData.js'
import UserDetailData from './models/userDetailData.js'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

let Monitre = await mongoose.connect("mongodb://127.0.0.1:27017/UserData")

app.get('/', (req, res) => {
    res.send('HI')
})

app.post('/signup', async (req, res) => {
    try {
        const emailVerifier = await EmailData.find({ email: req.body.email })
        if (emailVerifier.length > 0) {
            res.send('Email Existed')
        }
        else {
            const newUser = await SignupData.create(req.body)
            const newEmail = await EmailData.create({ email: req.body.email, id: newUser._id })
            res.send('User Created')
        }
    }
    catch (err) {
        res.send('Error')
    }
})

app.post('/login', async (req, res) => {
    try{
    const loginData = await SignupData.find({ email: req.body.email, password: req.body.password })
    if (loginData.length > 0) {
        const id = await EmailData.find({ email: req.body.email })
        res.send(id)
    }
    else {
        res.send('Login Failed')
    }
}
catch(err){ res.send('Error') }  
})

app.post('/user-name', async (req, res) => {
    try{
    let id = req.body.id
    const loginData = await SignupData.find({ _id: id })
    res.send(loginData[0].name)
    }
    catch(err){ res.send('Error') }
})

app.post('/user-details', async (req, res) => {
    try{
    const newUser = await UserDetailData.create(req.body)
    res.send('User Details Set')
    }
    catch(err){ res.send('Error') }
})

app.post('/user-details-update', async (req, res) => {
    try{
    console.log(req.body)
    const newUser = await UserDetailData.updateOne({ id: req.body.id }, req.body)
    res.send('User Details Updated')
    }
    catch(err){ res.send('Error') }
})

app.post('/personal-details', async (req, res) => {
    try{
    const personalData = await UserDetailData.find({ id: req.body.id })
    res.send(personalData)
    }
    catch(err){ res.send('Error') }
})

app.post('/emna-details', async (req, res) => {
    try{
    const personalData = await SignupData.find({ _id: req.body.id })
    const personalData2 = await { "email": personalData[0].email, "name": personalData[0].name }
    res.send(personalData2)
    }
    catch(err){ res.send('Error') }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})