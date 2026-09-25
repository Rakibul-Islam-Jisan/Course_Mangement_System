const Student = require('../../models/StudentSchema')
const mongoose = require('mongoose')
const singleStudent = async (req,res)=>{
try {
    const {id} = req.params

    const validStudentID = mongoose.Types.ObjectId.isValid(id)

    if(!validStudentID)
    {
        return res.status(400).json({
            success:false,
            message:'Student Id is Not valid'
        })
    }

    const singlestudent = await Student.findById(id).populate('entrolledCourse')

    return res.status(200).json({
        success:true,
        message:'Here is student',
        data:singlestudent
    })
} catch (error) {
    return res.status(400).json({
        success:false,
        message:'server error',
        error:error.message
    })
}
}
module.exports = singleStudent