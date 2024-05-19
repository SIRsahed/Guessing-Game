let p_one_input = document.querySelector(".p_one_input")
let p_one_btn = document.querySelector(".p_one_btn")
let error = document.querySelector(".error")
let p_one = document.querySelector(".p_one")

p_one_btn.addEventListener("click", ()=>{
    if(p_one_input.value){
        if(p_one_input.value - 10){
            if(p_one_input.value >= 0 && p_one_input.value <= 10){
                p_one.style.display = "none"
                p_two.style.display = "block"
            }else{
                error.innerHTML = "Please enter a digit between 1 to 10"
            }
        }else{
            error.innerHTML = "Please enter a number"
        }
    }
})



let p_two = document.querySelector(".p_two")
let p_two_input = document.querySelector(".p_two_input")
let p_two_btn = document.querySelector(".p_two_btn")
let result = document.querySelector(".result")
let chance = 3;

p_two_btn.addEventListener("click", ()=>{
    if(p_two_input.value - 10){
        if(p_two_input.value >= 0 && p_two_input.value <= 10){
            if(p_one_input.value == p_two_input.value){
                result.innerHTML = "You won"
            }else{
                chance--
                result.innerHTML = chance
        
                if(chance <= 0 ){
                    result.innerHTML = "You lost </br> Player One won"
                }
            }
        }else{
            result.innerHTML = "Please enter a digit between 1 to 10"
        }
    }else{
        result.innerHTML = "Please enter a number"
    }
})