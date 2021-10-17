
const mongooose = require('mongoose');
const validator = require("validator");

const studentSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone: {
        type: Number,
        required:true,
       // min:10,
        //max:10,
        //unique:true
    },
    
    address: {
         type: String,
        required:true
    }
    
})
// we will create a new collection
const Student = new mongooose.model('Student', studentSchema);

module.exports = Student;