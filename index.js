import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from 'url'

import indexAPI from "./routes/indexRoute.js"

// file constants
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("combined"))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "./views"))
app.use(express.static(path.join(__dirname, 'css')))

app.use("/", indexAPI)

const port = process.env.PORT ?? 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})