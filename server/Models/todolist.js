const mongoose = require('mongoose')


const todlistScheme = new mongoose.Schema({
    task:{
        type:String,
        lowercase:true,
    },
    taskdate:{
        type:Date,
        default:Date.now
    },
    taskStatus:{
        type:Boolean
    },
    taskImportance:{
        type:Boolean
    }
   
})

const todo = mongoose.model('todoData',todlistScheme)

module.exports = todo;
