import express from 'express'
import mongoose from 'mongoose'
import teachersRoutes from './Routes/teachersRoutes.js'
import cors from 'cors'

mongoose.connect('mongodb+srv://testv1:testv1@cluster0.kqge8.mongodb.net/database')

const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/v1', teachersRoutes)

app.listen(8080, () => console.log('server is running'))