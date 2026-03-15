import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.render("accountCreate.pug")
})

export default router