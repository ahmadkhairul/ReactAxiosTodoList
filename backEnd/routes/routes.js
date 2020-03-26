const express = require("express");
const router = express.Router();

const TodoController = require("../controller/todos");

router.post("/", TodoController.create);
router.get("/", TodoController.get);
router.get("/:id", TodoController.detail);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.delete);
router.post("/palindrome", TodoController.palindrome);

module.exports = router;
