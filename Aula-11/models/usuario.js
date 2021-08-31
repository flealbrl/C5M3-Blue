// Importa o mongoose
const mongoose = require('mongoose');
// Schema -->  é uma estrutura de dados de documento (Parecido com a tabela do SQL) (ou forma do documento) que é aplicada por meio da camada de aplicativo.
// Model --> são construtores que pegam um schema e criam uma instância de um documento equivalente a registros em um banco de dados relacional.
// Collections --> são equivalentes a tabelas em bancos de dados relacionais. Eles podem conter vários documentos JSON.

const usuarioModel = new mongoose.Schema({
    nome: { type:String, required:true },
    sobrenome: { type:String, require:false},
    cpf: { type:String, required:true },
    idade: { type:Date, require:true },
    senha: { type:String, require:true },
    dataCriacao: { type:Date, default: Date.now}
})

module.exports = usuarioModel;