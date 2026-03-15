import { Router } from "express"
//import { getDatabaseInstance } from "../database/database.js"

const router = Router()
//const database = getDatabaseInstance()

router.get("/", (req, res) => {
    res.render("accountCreate.pug")
})

router.get("/login", (req, res) => {
    res.render("login.pug")
})

router.get("/signup", (req, res) => {
    res.render("accountCreate.pug")
})

router.get("/dashboard", (req, res) => {
    res.render("userDashboard.pug")
})

router.get("/logout", (req, res) => {
    res.render("login.pug")
})

router.get("/deleteAccount", (req, res) => {
    res.render("login.pug")
})

// router.get("/some-protected-route", async (req, res, next) => {
//     try {
//         const db = database.getDb()
//         const users = await db.collection("users").find({}).toArray()
//         res.json(users)
//     } catch (err) {
//         next(err)
//     }
// })


export default router