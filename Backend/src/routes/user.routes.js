import { Router } from "express";
import { register } from "../controllers/user.controller.js";
const router = Router();

router.route("/",(req,res)=>{
    res.send("From Router")
})
router.route("/login")
router.route("/register",register)
router.route("/add_to_activity")
router.route("/get_all_activity")

export default router;