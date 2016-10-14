/**
 * Created by championswimmer on 12/10/16.
 */

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoUrl = "mongodb://localhost:27017/newdatabase";
MongoClient.connect(mongoUrl, (err, db) => {
    if(err) throw  err;

     //db <- use this to do database operations

    // insertProducts(db, (msg) => {
    //     console.log(msg);
    // })

    findCostlyProducts(db, (results) => {
        console.log(results);
    });

    //When all db operations are done
    db.close();
})

function findCostlyProducts (db, callback) {
    let products = db.collection('products');

    let costlyProducts = products.find({
        price: {$gt: 1000},
    });
    costlyProducts.toArray((err, results) => {
        callback(results)
    });
}

function insertProducts (db, callback) {
    let collection = db.collection('products');

    collection.insertOne({
        name: 'EarPods',
        vendor: 'Apple',
        price: 14999
    }, (err, result) => {
        console.log(result)
        callback('Added successfully')
    })
}