const Course = require('../../models/CourseSchema')
const createCourse = async (req,res)=>{
   try {
     const {title,description,price,category,duration,isPublished} = req.body
    if(!title  || !price || !category || !duration)
    {
        return res.status(400).json({
            success:false,
            message:'Please fill all the field'
        })
    }

    if(price<0)
    {
        return res.status(401).json({
            success:false,
            message:'price must be more then 0'
        })
    }

    if(duration<1)
    {
        return res.status(401).json({
            success:false,
            message:'duration should be more then 1 or minimum 1 month'
        })
    }

    const existingCourse = await Course.findOne({title,category})
    if(existingCourse)
    {
        return res.status(400).json({
            success:false,
            message:'this course already exist'
        })
    }

    const newCourse = new Course({
        title,
        description,
        price,
        category,
        duration,
        isPublished
    })
    await newCourse.save()

    return res.status(200).json({
        success:true,
        message:'course created successfully'
    })


   } catch (error) {
    return res.status(400).json({
        success:false,
        message:'server error',
        error:error.message
    })
   }
}

module.exports = createCourse