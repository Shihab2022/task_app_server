const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
let port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());








const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z2avz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {
  try{
    await client.connect();
    const taskCollection = client.db("task_app").collection("task");

    app.get('/task',async(req,res)=>{
      const query = {};
      const cursor = taskCollection.find(query);
      const product = await cursor.toArray();
      res.send(product);
    })
    app.post('/add',async(req,res)=>{
      // const data=req.body
      // console.log('ok dome')
      // const result = await taskCollection.insertOne(data);
      // res.send(result)
      console.log('ok')
    })
  }
  finally {
  }
}


run().catch(console.dir);










// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('mongo is connected')
//   // perform actions on the collection object
//   client.close();
// });








app.get("/", async (req, res) => {
    res.send("Task app in running");
  });
  app.listen(port, () => {
    console.log("Task app  running on port", port);
  });