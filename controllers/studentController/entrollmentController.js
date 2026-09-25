const mongoose = require('mongoose')
const Student = require('../../models/StudentSchema')
const Course = require('../../models/CourseSchema')

const entrollment = async (req,res)=>{
    try {
        const {StudentID, CourseID} = req.params

        let validStudentID = mongoose.Types.ObjectId.isValid(StudentID)
        let validCourseID = mongoose.Types.ObjectId.isValid(CourseID)

        if(!validStudentID || !validCourseID)
        {
            return res.status(400).json({
                success:false,
                message:'give valid student or course id'
            })
        }

        let existingCourse = await Course.findById(CourseID)
        let existingStudent = await Student.findById(StudentID)

        if(!existingCourse)
        {
            return res.status(400).json({
                success:false,
                message:'no course with this id found'
            })
        }

        if(!existingStudent)
        {
            return res.status(400).json({
                success:false,
                message:'no student with this id found'
            })
        }

        let isEntrolled = await Student.entrolledCourse.includes(CourseID)

        if(isEntrolled)
        {
            return res.status(400).json({
                message:'already entrolled'
            })
        }

        Student.entrolledCourse.push(CourseID)
        await Student.save()

        return res.status(200).json({
            success:true,
            message:'entrollment successfull',
            data:Student
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:'server error',
            error:error.message
        })
    }
}

module.exports = entrollment