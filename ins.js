var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    assert = require('assert');


    var mongoClient = MongoClient.connect("mongodb://admin:admin@localhost:27017/admin", {
        useNewUrlParser: true
     } )

     var doc = [
        { item: "booooks", qty: 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
        // { item: "a4sheets", qty: 100, "size": { "h": 8.5, "w": 11, "uom": "in" },

             ];

     function insertData(datadoc,collection,databaseName,mongoc)
     { return new Promise(function(resolve, reject){
        var  returnArray = []
        var database = mongoc.db(databaseName)
         var coll=database.collection(collection)
         var data=coll.insertMany(datadoc)
        resolve (data)
    })
     }
     
   
      
     mongoClient.then(function(conn){
         insertData(doc,"things","MyLOCALDB",conn).then(function(data)
         {
            console.log(data);
            console.log("-==--= array data -=-=--=");
          } )
     })
