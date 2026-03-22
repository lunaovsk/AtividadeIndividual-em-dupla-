let mongoose = require("mongoose");

let perfilSchema = new mongoose.Schema({
  matricula: String,
  telefone: String,
  endereco: String,
  //relacionamento aqui 1 PERFIL PARA 1 ALUNO
  aluno: { type: mongoose.Schema.Types.ObjectId, ref: "Aluno" }, 
});

module.exports = mongoose.model("Perfil", perfilSchema);