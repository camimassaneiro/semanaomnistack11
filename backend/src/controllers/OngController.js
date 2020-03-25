const connection = require('../database/connection') // chamando a conexão do BD
const crypto = require('crypto');

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
         return response.json(ongs);
     },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body; // usando desestruturação para var 
    
    const id = crypto.randomBytes(4).toString('HEX'); // gerando números aleatórios para id

    await connection('ongs').insert({ // incluindo na tabela
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({id});
    }
}