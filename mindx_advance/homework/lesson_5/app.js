//todoinput
var todoinputmain = document.getElementsByClassName("work-to-do")[0]
var inputbtn = document.getElementById("input-btn").onclick =()=>{
    var todoinput = document.getElementById("enter").value
    var data;
    // todoinputmain.insertAdjacentHTML("beforeend", todoinputelement)
    var getlocalstrorage = localStorage.getItem("userinput")
    if(getlocalstrorage == null){
        data = [];
    } else {
        data = JSON.parse(getlocalstrorage)
    }
    data.push(todoinput)
    localStorage.setItem("userinput", JSON.stringify(data)) 
    showwork();
}
showwork()
function showwork(){
    var data;
    var getlocalstrorage = localStorage.getItem("userinput")
    if(getlocalstrorage == null){
        data = [];
    } else {
        data = JSON.parse(getlocalstrorage)
    }
    var pendingnumber = document.getElementById("pendingnumbers")
    pendingnumber.textContent = data.length
    let html = "";
    data.forEach((element, index) => {
        html +=  `<div class="work">
        <p>${element}</p>
        <i class="fa-solid fa-trash-can" onclick="deletework(${index})"></i>
    </div>` 
    });
    todoinputmain.innerHTML = html;
}
function deletework(index) {
    var getlocalstrorage = localStorage.getItem("userinput")
    var data;
    data = JSON.parse(getlocalstrorage)
    data.splice(index, 1);
    localStorage.setItem("userinput", JSON.stringify(data)) 
    showwork();
}
function clearall(){
    var data = [];
    localStorage.setItem("userinput", JSON.stringify(data)) 
    showwork();
}