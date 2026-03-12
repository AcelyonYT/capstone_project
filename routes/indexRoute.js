import { Router } from "express"

const router = new Router()

router.get("/", (res, req) => {
    res.json({message: "hello"})
})

export default router