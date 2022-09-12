const {Router} =require("express")
const {addUser}=require("../controllers/userController")

const router =Router();

router.post("/register", addUser)

module.export =router