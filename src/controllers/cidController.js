const CID = require('../models/cidModel');

const getAll = async (req, res) => {
    try {
        const cids = await CID.getAll();
        res.json({ cids: cids });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar CIDs' });
    }
};

const getById = async (req, res) => {
    try {
        const cidId = req.params.id;
        const cid = await CID.getById(cidId);
        if (!cid) {
            res.status(404).json({ error: `Não foi possível encontrar o CID com id: ${cidId}` });
        } else {
            res.status(200).json({ cid: cid });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar CID' })
    }
}

const getByCode = async (req, res) => {
    try {
        const cidCode = req.params.code;
        const cid = await CID.getByCode(cidCode);
        if (!cid) {
            res.status(404).json({ error: `Não foi possível encontrar o CID com código: ${cidCode}` });
        } else {
            res.status(200).json({ cid: cid });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar CID' })
    }
}

const getByDescription = async (req, res) => {
    try {
        const cidDescription = req.query.description;
        const cids = await CID.getByDescription(cidDescription);
        if (!cids) {
            res.status(404).json({ error: `A busca não retornou nenhhum CID com a descrição: ${cidDescription}` });
        } else {
            res.status(200).json({ cids: cids });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar CID' })
    }
}

module.exports = {
    getAll,
    getById,
    getByCode,
    getByDescription
}