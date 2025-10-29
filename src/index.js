import express from 'express'
import dotenv from 'dotenv'
import authRoutes from '../routes/authRoutes.js'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use('/api/v1/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Okay na to')
})

app.listen(port, () => console.log(`Server running in port: ${port}`))