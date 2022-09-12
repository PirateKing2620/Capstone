let questions = require('./db.json')
let globalId = 1
module.exports = {
    getRandomName: (req, res) => {
        let everyName = ['Kevin Child', 'Jared Collier', 'Egha Kusuma', 'Benjamin Cook', 'Travis Dunaway', 'Evan Koop', 'Samuel Bolitho', 'Spencer Anderson', 'Matt Gates', 'Jada Harris', 'Ryan Anderson', 'Matt Rawlings', 'Amy Bernard', 'Taha Manjoura', 'Jake Eichler', 'Joshua Febbie', 'Ethan Blanco', 'Greg Corbett', 'Emily Tuttle']
        let randomIndex = Math.floor(Math.random() * everyName);
        let randomName = this.everyName[randomIndex];
        res.status(200).send(randomName)
    },

    presumptuousDefinition: (req, res) => {
        const definition = ['Done or made without permission, right, or good reason.']
        res.status(200).send(definition)
    },

    userQuestion: (req, res) => {
        let {inputQuestion} = req.body
        console.log(req.body)
        let userQuestionObject = {
            id: globalId,
            inputQuestion
        }
        questions.push(userQuestionObject)
        res.status(200).send(questions)
    },
    // deleteQuestion: (req, res) => {

    //     res.status(200)
    // }

}
console.log(questions)