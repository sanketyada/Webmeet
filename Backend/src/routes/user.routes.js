import { Router } from "express";
import { register, Test, login } from "../controllers/user.controller.js";
const router = Router();

router.route("/").get(Test);

router.route("/login").post(login);

router.route("/register").post(register);

router.route("/add_to_activity");
router.route("/get_all_activity");

export default router;
