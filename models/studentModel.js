// models are mapped to specific loactions in db that store their specific data
// these models have schemas
//timestamps determine when data is saved to db and when it is updated.
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required: [true, 'Please enter student name']
        },
        registeration : {
            type : String,
            required : true
        },
        department : {
            type : String,
            required : true
        },

    }
)
//create model
 const Student = mongoose.model('Student', studentSchema);

 module.exports = Student;
 // use model to save data.