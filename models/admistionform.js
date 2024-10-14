const mongoose = require('mongoose');

const addmissionSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    fathername: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    village: { type: String, required: true }

});

const addmission_form = mongoose.model("addmission_form_data", addmissionSchema);

module.exports = addmission_form;