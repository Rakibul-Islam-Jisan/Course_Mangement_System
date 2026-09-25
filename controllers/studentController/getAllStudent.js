const Student = require('../../models/StudentSchema')

const getAllStudent = async (req,res)=>{
    try {
       let allStudent = await Student.find()
    if(!allStudent)
    {
        return res.status(400).json({
            success:false,
            message:'there are no student'
        })
    }

    return res.status(200).json({
        success:true,
        message:'Students found',
        data:allStudent
    }) 
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:'something wrong',
            error:error.message
        })
    }
}


module.exports = getAllStudent
