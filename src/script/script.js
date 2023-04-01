const gerador = document.querySelector('button')
const listOrdenada = document.querySelector('ol')
const modal = document.querySelector('.modal')
const limpar = document.querySelector('.limpar')
const input = document.querySelectorAll('input')

limpar.addEventListener('click', (event) => {
    event.preventDefault()
    input.forEach( element => {
        element.value = ''
    })
})

modal.addEventListener('click',(event) => {

    if(event.target.className == 'modal'){
        modal.classList.toggle('hidden')
    }
})

function geradorAli({fila__um,fila__dois}){

    const array = revertendoLista(fila__um)
    const array2 = revertendoLista(fila__dois)

    array.forEach((element,index) => {

        listOrdenada.innerHTML = ''
        
        if(index === array.length-1){
            const tagLi = document.createElement('li')
            tagLi.innerText = `${index+1} ${element} (Último da primeira fila)`
            listOrdenada.appendChild(tagLi) 
        }else{
            const tagLi = document.createElement('li')
            tagLi.innerText = `${index+1} ${element}`
            listOrdenada.appendChild(tagLi) 
        }
        
    })

    const p = document.createElement('p')
    listOrdenada.appendChild(p)

    array2.forEach((element,index) => {
        if(index === 0){
            const tagLi = document.createElement('li')
            tagLi.innerText = `${index+1} ${element} (Primeiro da segunda fila)`
            listOrdenada.appendChild(tagLi) 
        }else{
            const tagLi = document.createElement('li')
            tagLi.innerText = `${index+1} ${element}`
            listOrdenada.appendChild(tagLi) 
        }
    })
    
}

function montandoObjeto(){
    const form = document.getElementsByTagName('form')[0]
  
    form.addEventListener('submit', (event) => {

        event.preventDefault()
        
        const inputs = [...event.target]

        const data = new Object()

        inputs.forEach((element) => {
            if(element.name){
                data[element.id] = element.value.split(',')
            }
        })

       const modal = document.querySelector('.modal')
       modal.classList.toggle('hidden')
       geradorAli(data)
        
    })
}
montandoObjeto()

function revertendoLista(array){

    let arr = array.reverse()

    return arr
}

