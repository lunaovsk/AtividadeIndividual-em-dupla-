const express = require("express");
const router = express.Router();
const tarefaController = require("../controllers/tarefaController.js");
const auth = require("../middleware/auth.js");


router.get("/tarefa", auth, tarefaController.obterTodasTarefas);
router.post("/tarefa", tarefaController.criarTarefa);
router.delete("/tarefa/:id", tarefaController.deletarTarefa);
router.put("/tarefa/:id", tarefaController.editarTarefa);

module.exports = router;
