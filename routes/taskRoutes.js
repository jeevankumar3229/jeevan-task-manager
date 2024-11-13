const express = require("express");
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewear/authMiddleware");

const router = express.Router();

router.use(authMiddleware); 

router.get("/", ""); 
router.get("/:id", ""); 
router.post("/", ""); 
router.put("/:id","");
router.delete("/:id", "");

module.exports = router;
