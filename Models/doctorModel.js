import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    spacialization: {
        type: String,
        required: true
    },

    experiance: {
        type: Number,
        required: true
    },

    fee: {
        type: Number,
        required: true
    },

    timingfrom: {
        type: Object,
        required: true
    },
    timingto:
    {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }


}, { timestamps: true })



const doctorModal = mongoose.model('regdoctor', doctorSchema);

export default doctorModal;