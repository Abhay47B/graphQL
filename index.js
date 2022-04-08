import { ApolloServer , gql } from 'apollo-server-express';
import express  from 'express';
import { mongoose } from 'mongoose';
import {schema} from './src/schemas/schemas';

async function startServer(){
    const app = express();
    const apolloserver = new ApolloServer({
        schema
    });

    await apolloserver.start();

    apolloserver.applyMiddleware({ app });

    app.use((req,res)=>{
        res.send("Hello from apollo express server");
    })

    await mongoose.connect('mongodb://localhost:27017/usersDatabase',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    console.log("Mongoose Connected with DB");

    app.listen(4000,()=> console.log("Server running in 4000"));
}

startServer();