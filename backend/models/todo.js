const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    task:{
        type:String,
        require:true
    },
    status:{
        type:String
    }
})

const ToDo = mongoose.model('todo',todoSchema) ;

module.exports = ToDo;