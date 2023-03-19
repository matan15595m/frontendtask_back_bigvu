const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    headline:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    summary:{
        type: [String],
        required: true
    }

})

module.exports = mongoose.model('Course',courseSchema)