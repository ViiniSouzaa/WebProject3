const mongoCliente = require('mongodb').MongoClient;
const urlConnect = 'mongodb://127.0.0.1:27017/users';

require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

module.exports = class Users {

    static async authUser(email,senha){
        var user = await this.find(email);
        if(senha == user[0].password){
            var id = user[0].id;
            var token = jwt.sign({id}, process.env.SECRET, {
                expiresIn: 300});
            return token;
        }
        else return undefined;
    }

    static async UserRegister(email,senha){
        var user = await this.find(email);
        if(user.length == 0){
            this.insert(email,senha);
            return false;
        }else{
            return true;
        }
    }

    static async insert(email, senha){
        const conn = await mongoCliente.connect(urlConnect);
            const db = conn.db();
            const users = db.collection('users');
            users.insertOne({email : email, password : senha});
        conn.close();
    }

    static async update(email, senha){
        const conn = await mongoCliente.connect(urlConnect);
        const db = conn.db();    
        const users = db.collection('users');
            users.updateOne({email : email}, {$set : {password : senha}});
        conn.close();    
    }

    static async find(email){
        const conn = await mongoCliente.connect(urlConnect);
        const db = conn.db();
        const res = await db.collection('users').find({email : email}).toArray();
        conn.close();
            return res;
    }
}