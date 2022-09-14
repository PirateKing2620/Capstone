const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const { presumptuousDefinition, getRandomName, createUserQuestion, deleteQuestion } = require('./controller')

app.get("/api/definition", presumptuousDefinition)
app.get("/api/randomName", getRandomName)
app.post("/api/askedQuestion", createUserQuestion)
app.delete("/api/askedQuestion", deleteQuestion)




app.listen(4000, () => console.log("Server running on 4000"));