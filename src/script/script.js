const gerador = document.querySelector('button')
const listOrdenada = document.querySelector('ol')
const modal = document.querySelector('.modal')

modal.addEventListener('click',(event) => {

    if(event.target.className == 'modal'){
        modal.classList.toggle('hidden')
    }
})

gerador.addEventListener('click', (event) => {
    event.preventDefault()
    listOrdenada.innerHTML = ''
    const modal = document.querySelector('.modal')
    modal.classList.toggle('hidden')
    const primeiraFila = document.querySelectorAll('input')
    primeiraFila.forEach(element  => {

        let string = revertendoLista(element.value)

        string.forEach(element => {
            const tagLi = document.createElement('li')
            tagLi.innerText = element
            listOrdenada.appendChild(tagLi)          
        })
        
    })
})

function revertendoLista(string){
    let arr = string.split(',')

    let arrReverse = arr.reverse()

    return arrReverse
}