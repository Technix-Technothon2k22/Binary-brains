const router = require("express").Router();
import { UserRegister, UserLogin } from "../Controller/AuthController";
router.post("/signin", UserLogin);
router.post("/signup", UserRegister);

module.exports = router;
