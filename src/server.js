import express from  'express'
import cors from 'cors'
import listEndpoints from 'express-list-endpoints'
import mongoose from 'mongoose'
import commentRouter from './services/index.js'


const server = express()

server.use(cors())
server.use(express.json())

server.use('/comments',commentRouter)

const port = process.env.PORT || 3002


mongoose.connect(process.env.MONGO_CONNECTION)
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo')
    server.listen(port,()=>{
        console.table(listEndpoints(server))
        console.log("server listening on port ",port)
    })
})

mongoose.connection.on('error',err=>{
    console.log(err)
})