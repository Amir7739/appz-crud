const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({
    empId: {
        type: String,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    
    empDesg: {
        type: String,
        required: true
    },
    empSal: {
        type: Number,
        required:true
    },
    empCompany: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Employee', empSchema);