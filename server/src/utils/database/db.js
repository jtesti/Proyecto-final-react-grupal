const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const mongoDb = process.env.MONGO_DB;
console.log(mongoDb);
const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
        const { name, host } = db.connection;
        console.log(`Conectado a la DB: ${name} en el host: ${host}`);
    } catch (error) {
        console.error(`No has conectado a la DB`, error)
    }
}

module.exports = { connect };