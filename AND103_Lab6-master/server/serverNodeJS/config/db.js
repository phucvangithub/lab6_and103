const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://phucvan123:m9GD4yxJN3RqAoov@cluster0.rwhmx.mongodb.net/md19303";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
