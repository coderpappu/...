import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';


const app = express();

// middlewares 
app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');


const corsConfig = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

// app.use(
//     cors({
//         origin : "http://localhost:5173",
//         methods : ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
//     })
// )

// server run port 
const port = 8080;

// HTTP GET Request
app.get('/', (req,res) =>{
    res.status(201).json('Home GET Request!');
});

// api route 
app.use('/api', router);


// start server 
connect().then(() =>{
    try{
        app.listen(port, ()=>{
            console.log(`Server Connected to http://localhost:${port}`)
        })
    }catch(error){
        console.log('Cannot Connect to the server')
    }
}).catch(error =>{
    console.log('Invalid Database Connection..!');
})


