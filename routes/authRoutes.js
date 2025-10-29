import express from 'express'
import { authenticate } from '../controllers/authControllers.js'
const router = express.Router()

router.get('/' , authenticate)

export default router