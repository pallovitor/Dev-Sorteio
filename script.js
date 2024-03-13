

const button = document.querySelector(".button")
const result = document.querySelector(".result")
const minA = document.querySelector(".min")


    function convert(){
        const min = Math.ceil(document.querySelector(".min").value) 
        const max = Math.floor(document.querySelector(".max").value)
        
        if(min < 1){
            alert("NÃO É POSSIVEL SORTEAR O NUMERO "+min)
            document.querySelector(".min").focus()
            minA.value = 1
        }else if 
            (min == max){
                document.querySelector(".max").focus()
                alert("NÃO É POSSIVEL SORTEAR O NUMEROS IGUAIS!")
        }else if 
            (min < max){       
                const sorteado = Math.floor(Math.random() * (max - min + 1)) + min
                result.innerHTML = sorteado    
        }else{
            alert("O VALOR: "+min+" DEVE SER MENOR QUE: "+max)            
        }    
    }

    button.addEventListener("click", convert)