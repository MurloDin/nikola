const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    fio: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    comment: {
        type: String,
    }
});


module.exports = mongoose.model('Order', orderSchema)
