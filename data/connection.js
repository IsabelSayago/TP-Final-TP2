const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://admin:1234db@cluster0-shard-00-00.fppnc.mongodb.net:27017,cluster0-shard-00-01.fppnc.mongodb.net:27017,cluster0-shard-00-02.fppnc.mongodb.net:27017/TPFinal-TP2?ssl=true&replicaSet=atlas-12x0hv-shard-0&authSource=admin&retryWrites=true&w=majority';

const client = new MongoClient(uri);

let instance = null;

async function getConnection(){
    if(instance == null){
       
        try{

            instance = await client.connect();
        } catch(err){
            console.log(err.message);
        }
    }
    return instance;
}

module.exports = {getConnection};


