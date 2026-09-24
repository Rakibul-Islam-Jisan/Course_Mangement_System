const Course = require('../../models/CourseSchema')
const getAllCourse = async (req,res)=>{
    try {
        const existingAllCourse = await Course.find()
        return res.status(200).json({
            success:true,
            message:'Here is All the Course Available',
            data:existingAllCourse
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:'server error',
            error:error.message
        })
    }
}

module.exports = getAllCourse