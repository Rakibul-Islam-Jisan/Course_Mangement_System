const mongoose = require('mongoose')
const {Schema} = mongoose

const CourseSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    isPublished:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('course',CourseSchema)