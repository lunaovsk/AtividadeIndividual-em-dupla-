let mongoose = require("mongoose");
//não precisa dessa linha
//const Aluno = require("../models/aluno.js");

let tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  concluida: Boolean,
  //relacionamentos aqui 1 TAREFA PARA 1 ALUNO
  aluno: {
    type: mongoose.Schema.Types.ObjectId,
    //esse aluno teve que ser comentado 
    ref: "Aluno",
  },
    //relacionamentos aqui N TAREFA PARA N DISCIPLINAS
  disciplinas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Disciplina" }],
});

module.exports = mongoose.model("Tarefa", tarefaSchema);