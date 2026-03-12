import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import indexAPI from "./routes/indexRoute.js"

const app = express()

app.use(cors)
app.use(cookieParser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/index", indexAPI)

const port = process.env.PORT ?? 3000
const host = process.env.HOST ?? '127.0.0.1'

app.listen(port, host, () => {
    console.log(`Server running on port ${port}. Host: ${host}`)
})