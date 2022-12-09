var closepop = document.getElementById("closepop")
var closepop2 = document.getElementById("closepop2")
var popup = document.getElementById("pop-up")
var popadd = document.getElementById("pop-up-add")
var popupbtn = document.getElementById("pop-up-open")
closepop.addEventListener("click",function(){
  popup.style.display = 'none';
})
closepop2.addEventListener("click",function(){
  popadd.style.display = "none";
})
popupbtn.addEventListener("click",function(){
  popadd.style.display ='block';
  if(popup.style.display == "block"){
    popup.style.display= 'none';
  }
})
var search = new URLSearchParams(window.location.search)
var id = search.get("id");
if(id != null){
  document.getElementById("pop-up").style.display = "block";
} else {
}
