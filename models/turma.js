let mongoose = require("mongoose");

let turmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  //relacionamentos aqui 1 TURMA PARA N ALUNOS
  alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Aluno" }],
  //relacionamento aqui 1 TURMA PARA 1 PROFESSOR
  professor: { type: mongoose.Schema.Types.ObjectId, ref: "Professor" }
});

module.exports = mongoose.model("Turma", turmaSchema);