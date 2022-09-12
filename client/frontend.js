let userQuestion = document.querySelector('#question')



const askedQuestion = (e) => {
    e.preventDefault()
    let body = {
        inputQuestion : userQuestion.value
    }
    axios.post("http://localhost:4000/api/askedQuestion", body)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    userQuestion.value = ""
}

userQuestion.addEventListener('submit', askedQuestion)



const getRandomName = () => {
    axios.get("http://localhost:4000/api/randomName")
    .then(res => {
        const randomName = res.data
        
    })
}








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