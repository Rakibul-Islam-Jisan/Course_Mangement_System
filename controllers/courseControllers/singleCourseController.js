const Course = require('../../models/CourseSchema')
const mongoose = require('mongoose')

const singleCourse = async (req,res)=>{
try {
    const {id} = req.params
    let validCourseId = mongoose.Types.ObjectId.isValid(id)

    if(!validCourseId)
    {
        return res.status(400).json({
            success:false,
            message:'give valid course id'
        })
    }

    const singleCourse = await Course.findById(id)

    return res.status(200).json({
        success:true,
        message:'here is your course',
        data:singleCourse
    })
} catch (error) {
    return res.status(400).json({
        success:false,
        message:'server error',
        error:error.message
    })
}
}
module.exports = singleCourse