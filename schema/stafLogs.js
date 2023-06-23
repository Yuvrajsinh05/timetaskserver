const mongoose = require('mongoose')


const staffSchema = new mongoose.Schema({
    Name: { type: String },
    Project: { type: String },
    hours: { type: String },
    status: { type: String },
    timestamp: { type: String },
})

const Staff = mongoose.model('staffLogs', staffSchema)
module.exports = Staff