require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db.js');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const perfilRoutes = require('./routes/perfilRoutes');
const professorRoutes = require('./routes/professorRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const turmaRoutes = require('./routes/turmaRoutes');


app.use(express.json());
app.use('/api', alunoRoutes);
app.use('/api', disciplinaRoutes);
app.use('/api', perfilRoutes);
app.use('/api', professorRoutes);
app.use('/api', tarefaRoutes);
app.use('/api', turmaRoutes);

connectDB().then(() => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});