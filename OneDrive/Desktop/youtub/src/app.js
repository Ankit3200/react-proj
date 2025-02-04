import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();
app.use(cors(
    process.env.CORS_ORG
,));

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true,limit:'16kb'})); 
app.use(express.static("public"));
app.use(cookieParser())



export {app};