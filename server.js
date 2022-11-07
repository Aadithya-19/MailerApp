var nodemailer=require('nodemailer')
const transporter = nodemailer.createTransport({
    port:465,
    host:"svaadithya@gmail.com",
    auth:{
        user:'',
        pass:''
    },
    secure:true
})

const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);