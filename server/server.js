import express from 'express'

import cors from 'cors'

import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express()


const port = 3000

await connectDB()
//middlewares

app.use(express.json())

app.use(cors())

app.use(clerkMiddleware())


//Api routesss

app.get('/',(req,res)=>res.send('server is Live '))
app.use('/api/inngest',serve({ client: inngest, functions }))

app.listen(port,()=>console.log(`server is ruuing at the port${port}`))
