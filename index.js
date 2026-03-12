import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import path from "path"
import { fileURLToPath } from 'url'

import indexAPI from "./routes/indexRoute.js"

// file constants
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const app = express()

app.use(cors)
app.use(cookieParser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "views"))

app.use("/api/index", indexAPI)

const port = process.env.PORT ?? 3000
const host = process.env.HOST ?? '127.0.0.1'

app.listen(port, host, () => {
    console.log(`Server running on port ${port}. Host: ${host}`)
})