const mongoose = require('mongoose')
const Course = require('../../models/CourseSchema')

const deleteCourse = async (req,res)=>{
    try {
        const {id} = req.params
        const validCourseID = mongoose.Types.ObjectId.isValid(id)

        if(!validCourseID)
        {
            return res.status(400).json({
                success:false,
                message:'give valid course id'
            })
        }

        const deleteCourseByID = await Course.findByIdAndDelete(id)

        return res.status(200).json({
            success:true,
            message:'course deleted'
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:'something wrong',
            error:error.message
        })
    }
}

module.exports = deleteCourse