let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
const date = new Date()
let month = date.getMonth() +1
let day = date.getDate()

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = month + "/"+ day + ": "+ count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
