var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var mongoose = require('mongoose');

var CONTACTS_COLLECTION = "contacts";
var AVAILABLE_DIRECTIONS = 'available_directions';
var AIRPORTS = 'airports'
var DIRECTIONS_WITH_TRANSFERS = 'directions_with_transfers'

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
var Airport = require('./src/server/models/airport');
var AvailableDirection = require('./src/server/models/available_direction')
var DirectionWithTransfers = require('./src/server/models/direction_with_transfers')

// Connect to the database before starting the application server.

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
    console.log(process.env.MONGODB_URI)
  });
});

// mongoose.connect(process.env.MONGODB_URI, function (err, database) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//
//   // Save database object from the callback for reuse.
//   db = database;
//   console.log("Database connection ready");
//
//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/directions_with_transfers/", function(req, res) {
  db.collection(DIRECTIONS_WITH_TRANSFERS).find({"departure_id": Number(req.body.departure_id)})
    .toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/availdirections/:code", function(req, res) {
  // Airport.findOne({code_airport: req.params.code}, function(err, docs) {
  //   if (err) {
  //     handleError(res, err.message, "Failed to get contacts.");
  //   } else {
  //     res.status(200).json(docs);
  //   }
  // })
  // db.collection(AVAILABLE_DIRECTIONS).find({"departure_code": req.body.departure_code})
  //   .toArray(function(err, docs) {
  //   if (err) {
  //     handleError(res, err.message, "Failed to get contacts.");
  //   } else {
  //     res.status(200).json(docs);
  //   }
  // });
});

app.get("/api/airport/:code", function(req, res) {
  db.collection(AIRPORTS).find({"code_airport": req.params.code}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

// app.post("/api/contacts", function(req, res) {
//   var newContact = req.body;
//   newContact.createDate = new Date();

//   if (!req.body.name) {
//     handleError(res, "Invalid user input", "Must provide a name.", 400);
//   }

//   db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to create new contact.");
//     } else {
//       res.status(201).json(doc.ops[0]);
//     }
//   });
// });

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

// app.get("/api/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contact");
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });

// app.put("/api/contacts/:id", function(req, res) {
//   var updateDoc = req.body;
//   delete updateDoc._id;

//   db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to update contact");
//     } else {
//       updateDoc._id = req.params.id;
//       res.status(200).json(updateDoc);
//     }
//   });
// });

// app.delete("/api/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
//     if (err) {
//       handleError(res, err.message, "Failed to delete contact");
//     } else {
//       res.status(200).json(req.params.id);
//     }
//   });
// });
