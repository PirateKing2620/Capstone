let form = document.querySelector('form')
let answerSection = document.querySelector('#answerSection')

const askedQuestion = (e) => {
    e.preventDefault()
    let userQuestion = document.querySelector('#question')
    let body = {
        userQuestion : userQuestion.value
    }
    axios.post("http://localhost:4000/api/askedQuestion", body)
    .then((res) => {
        console.log(res.data)
        let createdUserQuestion = document.createElement('div')
        createdUserQuestion.innerHTML = `<h3>${"Question: " + res.data}</h3>`
        answerSection.appendChild(createdUserQuestion)

            axios.get("http://localhost:4000/api/randomName")
            .then(res => {
                const aRandomName = res.data
                console.log(aRandomName)
                let userAnswer = document.createElement('div')
                userAnswer.innerHTML = `<h3>${aRandomName}</h3>`
                answerSection.appendChild(userAnswer)
            })
    })
    .catch((err) => {
        console.log(err)
    })
    userQuestion.value = ""
}

form.addEventListener('submit', askedQuestion)



const presumptuousDef = document.getElementById("presumptuous")

const presumptuousDefinition = () => {
    axios.get("http://localhost:4000/api/definition")
    .then(res => {
        const data = res.data
        alert(data)
    })
    .catch()
}

presumptuousDef.addEventListener('click', presumptuousDefinition)