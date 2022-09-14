let questions = require('./db.json')
let globalId = 1
module.exports = {
    getRandomName: (req, res) => {
        let everyName = ['Kevin Child', 'Jared Collier', 'Egha Kusuma', 'Benjamin Cook', 'Travis Dunaway', 'Evan Koop', 'Samuel Bolitho', 'Spencer Anderson', 'Matt Gates', 'Jada Harris', 'Ryan Anderson', 'Matt Rawlings', 'Amy Bernard', 'Taha Manjoura', 'Jake Eichler', 'Joshua Febbie', 'Ethan Blanco', 'Greg Corbett', 'Emily Tuttle']
        let randomIndex = Math.floor(Math.random() * everyName.length)
        let randomName = everyName[randomIndex]
        res.status(200).send(randomName)
    },

    presumptuousDefinition: (req, res) => {
        const definition = ['Done or made without permission, right, or good reason.']
        res.status(200).send(definition)
    },

    createUserQuestion: (req, res) => {
        let {userQuestion} = req.body
        console.log(userQuestion)
        // console.log(req.body)
        // let userQuestionObject = {
        //     id: globalId,
        //     inputQuestion
        // }
        // questions.push(userQuestionObject)
        // globalId++
        res.status(200).send(userQuestion)
    },
    deleteQuestion: (req, res) => {
        res.status(200)
    }

}
