const display = document.getElementsByClassName("display")[0]
const btn = Array.from(document.querySelectorAll("button"))

btn.map(button =>{
    button.addEventListener("click", (e)=>{
        switch(e.target.innerText){
            case "C":
                display.innerText = ""
                break;
            case "Del":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = "ERROR!!"
                }
                break;
            default:
                display.innerText += e.target.innerText
        }
    })
})
