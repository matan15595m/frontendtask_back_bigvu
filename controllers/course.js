
const Course = require('../models/course_model')
const getAllCourses = async (req,res,next)=>{
    try{
        let courses = {}
        if (req.query.id == null){
            courses = await Course.find()
        }else{
            courses = await Course.find({'id' : req.query.id})
        }
        res.status(200).send(courses) 
    }catch(err){
        res.status(400).send({'error':"fail to get courses from db"})
    }
}

const getcourseById = async (req,res,next)=>{
    try{
        const courses = await Course.findById(req.params.id)
        res.status(200).send(courses) 
    }catch(err){
        res.status(400).send({'error':"fail to get courses from db"})
    }
}



const addNewcourse = async (req,res,next)=>{
    const course = new Course({
        id: req.body.id,
        title: req.body.title,
        headline:req.body.headline,
        description:req.body.description,
        summary:req.body.summary
    })

    try{
        course = await course.save()
        console.log("save course in db")
        res.status(200).send(course)
    }catch (err){
        console.log("fail to save course in db")
        res.status(400).send({'error': 'fail adding new course to db'})
    }
}


module.exports = {getAllCourses, addNewcourse, getcourseById}
