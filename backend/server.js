import express from 'express'
import mongoose from 'mongoose'
import teachersRoutes from './Routes/teachersRoutes.js'

mongoose.connect('mongodb+srv://finaltest:finaltest@cluster0.sgnrc.mongodb.net/')

const app = express()
app.use(express.json())

app.use('/api/v1', teachersRoutes)

app.listen(8080, () => console.log('server is running'))