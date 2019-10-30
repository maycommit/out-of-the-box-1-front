const rappers = require('./mock/rappers.json')
//colocar lista no html
//adicionar botão de remover em cada um dos rappers
//adicionar funcionalidade remoção
//adiconar funcionalidade de reverter remoção
//criar rapper
//melhorar código

let rapperAlive = rappers
let htmlRapper = []

htmlRapper = rapperAlive.map(rapper => `<span> ${rapper.name}</span> <br> 
<span> ${rapper.age}</span> <br> 
<span> ${rapper.album}</span> <br>
<span> ${rapper.single}</span>`)
const aliveHtml = htmlRapper.join('')

document.getElementById('lista').innerHTML = aliveHtml
/*
document.getElementById('criar').addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const album = document.getElementById("album").value
    const single = document.getElementById("single").value

    console.log(name, age, album, single)
    rapperJson.push(
    `<span> ${rapper.name}</span> <br> 
    <span> ${rapper.age}</span> <br> 
    <span> ${rapper.album}</span> <br>
    <span> ${rapper.single}</span>`
    )
    const newRapper = alive.join('')
    document.getElementById('Lista').innerHTML = aliveHtml
})


document.getElementById('remove').addEventListener('click', () => {
    let dead = deadRappers
  
    dead = deadRappers.map(rapper => 
    `<span>${rapper.name}</span> </br> 
    <span>${rapper.age}</span> </br> 
    <span>${rapper.album}</span> </br> 
    <span>${rapper.single}</span></br>`
    )
    const html = dead.join('')
  
    document.getElementById('rappersList').innerHTML = html
  })
*/
