let mongoose = require("mongoose");

let professorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  //relacionamento aqui 1 PROFESSOR PARA N DISCIPLINAS
  disciplinas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Disciplina" }],
});

module.exports = mongoose.model("Professor", professorSchema);