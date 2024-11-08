
const cors = require('cors'); // Importar o CORS

const express = require('express');
const cidRoutes = require('./routes/cidRoutes');
const swagger = require('./swagger');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use('/api', cidRoutes);

swagger(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})