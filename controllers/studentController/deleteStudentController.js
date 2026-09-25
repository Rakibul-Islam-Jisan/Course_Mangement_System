const Student = require('../../models/StudentSchema')
const mongoose = require('mongoose')

const deleteStudent = async (req,res)=>{
   try {
     const {id} = req.params
    const validStudentID = mongoose.Types.ObjectId.isValid(id)

    if(!validStudentID)
    {
        return res.status(400).json({
            success:false,
            message:'id is not valid'
        })
    }

    const existingStudent = await Student.findById(id)

    if(!existingStudent)
    {
         return res.status(400).json({
            success:false,
            message:'no student found with this id'
        })
    }

    if(existingStudent.entrolledCourse.length > 0)
    {
         return res.status(400).json({
            success:false,
            message:'cant delete student is already entrolled in a course'
        })
    }

    const deleteStd = await Student.findByIdAndDelete(id)
     return res.status(400).json({
            success:true,
            message:'deleted'
        })
   } catch (error) {
     return res.status(500).json({
            success:false,
            message:'internel error',
            error:error.message
        })
   }
}

module.exports = deleteStudent