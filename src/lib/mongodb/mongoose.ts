import mongoose from 'mongoose';

// Flag to check if the connection is already initialized
let initialized = false;

// Define the async function to connect to MongoDB
export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('already connected');
        return;
    }

    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        console.error('Error: MONGODB_URI environment variable is not defined.');
        return;
    }

    try {
        // Attempt to connect to MongoDB without deprecated options
        await mongoose.connect(mongoUri, {
            dbName: "Next-Auth"
        });
        console.log('connected to mongodb');
        initialized = true;

    } catch (error) {
        // Log any errors that occur during connection
        console.error("mongodb error", error);
    }
}
