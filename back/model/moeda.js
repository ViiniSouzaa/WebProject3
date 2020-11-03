const mongoCliente = require('mongodb').MongoClient;
const urlConnect = 'mongodb://127.0.0.1:27017/moedas';

module.exports = class Moedas{

    static async RegisterMoeda(sigla, nome, valor){
        var moeda = await this.findOne(sigla);
        if(moeda.length == 0){
            this.insert(sigla,nome,valor)
            return true;
        }else
            return false;
    }

    static async insert(sigla, nome, valor){
        const conn = await mongoCliente.connect(urlConnect);
        const db = conn.db();
        const moeda = db.collection('moedas');
        moeda.insertOne({sigla : sigla, nome : nome, valor : valor});
    }

    static async find(nomeMoeda1, nomeMoeda2){
        const conn = await mongoCliente.connect(urlConnect);
        const db = conn.db();
        const moeda1 = await db.collection('moedas').find({nome : RegExp(nomeMoeda1)}).toArray();
        const moeda2 = await db.collection('moedas').find({nome : RegExp(nomeMoeda2)}).toArray();
        if(moeda1[0].sigla == 'BRL'){
            return {moeda1, moeda2};
        }else {
            moeda2[0].valor = (1 / moeda1[0].valor);
            moeda1[0].valor = 1;
            return {moeda1, moeda2};
        }
    }

    static async findOne(siglaMoeda1){
        const conn = await mongoCliente.connect(urlConnect);
        const db = conn.db();
        const moeda = await db.collection('moedas').find({sigla : RegExp(siglaMoeda1)}).toArray();
        return moeda;
    }

    static async findAll(){
        const conn = await mongoCliente.connect(urlConnect);
        const db = conn.db();
        const moeda = await db.collection('moedas').find().toArray();
        return moeda;
    }

    
}