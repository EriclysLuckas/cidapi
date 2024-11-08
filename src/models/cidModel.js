const pool = require('../config/db');

const getAll = async () => {
    const result = await pool.query('SELECT * FROM cids;');
    return result.rows;
}

const getById = async (id) => {
    const result = await pool.query('SELECT * FROM cids WHERE id = ($1)', [id]);
    return result.rows[0];
}

const getByCode = async (code) => {
    const result = await pool.query('SELECT * FROM cids WHERE code = ($1)', [code]);
    return result.rows[0];
}

const getByDescription = async (description) => {
    const result = await pool.query(
        'SELECT * FROM cids WHERE description ILIKE $1',
        [`%${description}%`]
    );
    return result.rows;
}

module.exports = {
    getAll,
    getById,
    getByCode,
    getByDescription
}