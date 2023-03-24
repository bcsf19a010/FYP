const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

module.exports = async (dbname="userData",cName="data")=>{
    let connect = await client.connect();
    let db = connect.db(dbname);
    return db.collection(cName); 
}

