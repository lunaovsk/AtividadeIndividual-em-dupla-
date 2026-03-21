const Aluno = require('../models/aluno.js');

const criarAluno = async (req, res) => {

  console.log('ta aqui')
  try {
    const { nome, idade } = req.body;
    console.log('ta aqui 2')
    
    if(!nome) {
      return res.status(400).json({error: "Nome é obrigatório"})
    }
    if(!idade && idade >= 15 && idade <= 99) {
      return res.status(400).json({error: "idade é obrigatório"})
    }
    const novoAluno = new Aluno({nome, idade});
    console.log('ta aqui 3')
    await novoAluno.save();
    res.status(201).json({message: "Aluno criado com sucesso!", aluno: novoAluno});
  } catch (error) {
    return res.status(500).json(error);
  }
};

const obterTodosAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find().populate('perfil');
    if (!alunos) {
      return res.status(404).json({error: "Não há alunos cadastrados."})
    }
    res.status(200).json(alunos);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletarAluno = async (req, res) => {
  try {
    const { id } = req.params;
    const alunoRemove = await Aluno.find(id)
    if (!alunoRemove) {
      return res.status(404).json({error: "Aluno já deletado ou não encontrado"})
    }
    await alunoRemove.findOneAndDelete()
    res.status(200).json({ message: 'Aluno removido com sucesso!' });
    } catch (error) {
    return res.status(500).json(error);
  }
};

const editarAluno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade } = req.body;
    let professor = await Professor.findByIdAndUpdate(id, { nome, idade, disciplinas: disciplinasIds });
    res.status(200).json({message: "Professor atualizado com sucesso!", professor,
  })
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {criarAluno, obterTodosAlunos, deletarAluno, editarAluno};

