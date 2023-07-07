const User = require('../Models/todolist')



module.exports.tododata_read = async (req,res)=>{
    const tempData = [
        {
        "task":"Learn Reactjs",
        "taskdate":Date.now,
        "taskImportance":false,
    },
    {
        "task":"Learn Python",
        "taskdate":Date.now,
        "taskImportance":false,
    }
    
]
    try{
        const todoList =  await User.find({});
        console.log(todoList);
        res.json(tempData)
    }
    catch(error){
        console.log(error)
    }

}

module.exports.tododata_create=(req,res)=>{

}
module.exports.tododata_update = (req,res)=>{

}

module.exports.tododata_delete = (req,res)=>{

}