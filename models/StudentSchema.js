const mongoose = require('mongoose')
const {Schema} = mongoose

const StudentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    entrolledCourse: [
        {
            type:Schema.Types.ObjectId,
            ref:'course'
        }
    ]
})

module.exports = mongoose.model('student',StudentSchema)