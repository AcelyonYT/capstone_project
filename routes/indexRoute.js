import { Router } from "express"

const router = Router()

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

export default router