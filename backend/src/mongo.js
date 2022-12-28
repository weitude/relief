import mongoose from 'mongoose';
import dotenv from 'dotenv';

export default {
    connect: () => {
        dotenv.config();
        mongoose.set('strictQuery', false);
        if (!process.env.MONGO_URL) {
            console.error("Missing MONGO_URL!!!");
            process.exit(1);
        }
        mongoose
            .connect(process.env.MONGO_URL, {dbName: "reliefDB"})
            .then(() => console.log("mongo db connection created"));
        mongoose.connection.on("error", console.error.bind(console, 'connection error:'));
    }
};