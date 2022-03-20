let input = document.querySelector("#textBox")
let mainDiv = document.querySelector("#grid")
let form = document.querySelector("form")

form.addEventListener("submit",fn =>{
    mainDiv.innerHTML=""
    fn.preventDefault()
    if(!input.value || parseInt(input.value)<=0) return
    const num = parseInt(input.value)
    // console.log(num)
    for(let i=1;i<=num;i++){
        const giftDiv= document.createElement("div")
        giftDiv.classList.add("gift")
        const giftNo= document.createElement("p")
        giftNo.innerText = i
        giftDiv.appendChild(giftNo)
        mainDiv.appendChild(giftDiv)
        
    }
})








