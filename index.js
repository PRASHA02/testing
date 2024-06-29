const express = require('express')

const app = express()

require('dotenv').config();

const router = require('./routes/testRoute')

app.use(express.json())

//testing route
app.use('/api',router);


const port = process.env.PORT || 5000

const start = async(req,res) => {
    try{
        app.listen(port,()=>console.log(`Listening to Port ${port}..`))
    }catch(err){
        console.log('something went wrong')
        process.exit(1)
    }
}

start()