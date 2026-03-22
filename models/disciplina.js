let mongoose = require("mongoose");
//não precisa dessa linha pode ser commentada e nao esta sendo usada
//const Tarefa = require("./tarefa.js");

let disciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  dataInicio: { type: Date, default: Date.now },
  dataFim: { type: Date },
  //relacionamento aqui N DISCIPLINAS PARA N TAREFAS
  tarefas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tarefa" }],
});

module.exports = mongoose.model("Disciplina", disciplinaSchema);