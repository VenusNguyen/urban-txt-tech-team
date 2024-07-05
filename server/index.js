const express = require("express");

const { MongoClient } = require("mongodb");

const mongoURI = "mongodb+srv://venus:SEatwWmgzcwcQY5I@cluster0.c7mjto2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// We create a new instance of the MongoClient
const client = new MongoClient(mongoURI);

// We create the express server
const app = express();

// We define the port
const PORT = 3000;

// We add middleware to parse JSON data
app.use(express.json());

// Function to connect to the mongoDB database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the DB");
  } catch (err) {
    console.error(err);
  }
}

// Call the async function to connect to the database
connectToDatabase();

// We define the route to create a new document in the database
app.post("/create", async (req, res) => {
  const database = client.db("mongo-challenge");
  const collection = database.collection("users");

  console.log("this is the request body", req.body);

  const result = await collection.insertOne(req.body);

  res.send(result);
});

// We define the route to get all the documents in the database
app.get("/users", async (req, res) => {
  // We connect to the database, 'mongo-challenge' is the name of the database
  const database = client.db("mongo-challenge");

  // Collection name is users
  const collection = database.collection("users");

  // We make a request to find all the documents in the collection
  const result = await collection.find({}).toArray();

  console.log("this is the result", result);

  res.send(result);
});

// We define the route to get a specific document in the database
app.get("/user/:id", async (req, res) => {
  const database = client.db("mongo-challenge");
  const collection = database.collection("users");

  console.log("this is the request params", req.params);

  const result = await collection.findOne({ _id: req.params.id });

  res.send(result);
});

// We make a delete request to delete a specific document in the database
// app.delete("/user/:id", async (req, res) => {
//   const database = client.db("mongo-challenge");
//   const collection = database.collection("users");

//   console.log("this is the request params", req.params);

//   const result = await collection.deleteOne({ _id: req.params.id });

//   res.send(result);
// });

// We start the server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});