

const button = document.querySelector(".button")
const result = document.querySelector(".result")


    function convert(){
        const min = Math.ceil(document.querySelector(".min").value) 
        const max = Math.floor(document.querySelector(".max").value)

        const sorteado = Math.floor(Math.random() * (max - min + 1)) + min
        result.innerHTML = sorteado
        
    }

    button.addEventListener("click", convert)