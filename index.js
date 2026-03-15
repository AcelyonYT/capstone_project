import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from 'url'
import { getDatabaseInstance } from "./database/database.js"
import dotenv from "dotenv"
dotenv.config()

// API routes
import indexAPI from "./routes/indexRoute.js"

// file constants
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

// get the database instance
const database = getDatabaseInstance()
// connect
await database.connect()

// the express backend
const app = express()

// make database accessible through app.locals
app.locals.db = database.getDb()

// middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("combined"))

// view engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "./views"))
app.use(express.static(path.join(__dirname, 'css')))

// routes
app.use("/", indexAPI)

// the port
const port = process.env.PORT ?? 3000
// listen to server
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})