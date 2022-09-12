const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const { presumptuousDefinition, getRandomName, userQuestion } = require('./controller')

app.get("/api/definition", presumptuousDefinition)
app.get("/api/randomName", getRandomName)
app.post("/api/askedQuestion", userQuestion)




app.listen(4000, () => console.log("Server running on 4000"));