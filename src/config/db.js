require('dotenv').config();




const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432
})

pool.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao Banco');
    } else {
        console.log('Base de dados conectado com sucesso!');
    }
})

async function testConnection() {
    try {
        await pool.connect();
        console.log('Base de dados conectada com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao Banco:', err.message);
        console.error('Detalhes do erro:', err.stack);
    }
}

testConnection();
module.exports = pool;