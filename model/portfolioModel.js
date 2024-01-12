const mongoose = require('mongoose')

const introSchema = new mongoose.Schema({
    welcome:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    caption:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
})
const aboutSchema = new mongoose.Schema({
    imageUrl:{
        type: String,
        required: true
    },
    specifications:{
        type: Array,
        required: true
    },
    description1:{
        type: String,
        required: true
    },
    description2:{
        type: String,
        required: true
    },
    description3:{
        type: String,
        required: true
    },
    description4:{
        type: String,
        required: true
    },
    description5:{
        type: String,
        required: true
    },
    skills:{
        type: Array,
        required: true
    },
})
const educationSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    period:{
        type: String,
        required: true
    },
    school:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
})
const projectSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    technologies:{
        type: Array,
        required: true
    },
})
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
})

module.exports = {
    Intro : mongoose.model('intros' , introSchema),
    About : mongoose.model('abouts' , aboutSchema),
    Education : mongoose.model('educations' , educationSchema),
    Project : mongoose.model('projects' , projectSchema),
    Contact : mongoose.model('contacts' , contactSchema)
}