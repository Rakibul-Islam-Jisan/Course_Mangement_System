const Student = require('../../models/StudentSchema')

const createStudent = async (req,res)=>{
    try {
       const {name, email, phone, age} = req.body

    if(!name || !email || !phone || !age)
    {
        return res.status(400).json({
            success:false,
            message:'fill all the field'
        })
    }

    if(age<18)
    {
        return res.status(400).json({
            success:false,
            message:'you are underage'
        })
    }

    let existingStudent = await Student.findOne({email})
    if(existingStudent)
    {
        return res.status(400).json({
            success:false,
            message:'Student already exist'
        })
    }

    let newStudent = new Student({
        name,
        email,
        phone,
        age
    })

    await newStudent.save()
    

    return res.status(200).json({
        success:false,
        message:'new student created',
        data:newStudent
    }) 
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:'server error',
            error:error.message
        })
    }
}

module.exports = createStudent