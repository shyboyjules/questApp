const Express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const multer = require('multer');

const app = Express();
app.use(cors());

const CONNECTION_STRING = "mongodb+srv://Admin:admin123@questapp.rowht.mongodb.net/?retryWrites=true&w=majority&appName=QuestApp";
const DATABASENAME = "questboard";
let database;

const PORT = 5038;

// Start the server and connect to MongoDB
app.listen(PORT, async () => {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING);
        database = client.db(DATABASENAME);
        console.log(`Connected to the database and server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
});

// API to get quests
app.get('/api/QuestApp/getquest', async (request, response) => {
    try {
        const quests = await database.collection("questboardcollection").find().toArray();
        response.send(quests);
    } catch (error) {
        console.error("Error fetching quests:", error);
        response.status(500).send("Error fetching quests.");
    }
});

app.post('/api/QuestApp/addquest', (req, res) => {
    database.collection("questboardcollection").count({}, function(error,numOfDocs){
        database.collection("questboardcollection").insert({
                id: (numOfDocs + 1).toString(),
                name: request.body.name,
                skillrequired: request.body.skillrequired,
                date: request.body.date,
                amount: request.body.amount,
                paymentmethod: request.body.paymentmethod,
                
        });
        response.json("Quest added successfully");
    })
})
