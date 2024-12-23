import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";


async function connect(){

    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

   mongoose.set("strictQuery", false);
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log("Database Connected")
    return db;
}

export default connect;
