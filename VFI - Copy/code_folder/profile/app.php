<script text="text/javascript">
//pop-up
for(let i = 0;i< document.getElementsByClassName("popup").length;i++){
    console.log(i);
    document.getElementsByClassName("popup")[i].addEventListener("click",function(){
        document.getElementsByClassName("pop-up")[i].style.display = "block"
    })
}
for(let i =0;i< document.getElementsByClassName("closepop").length;i++){
    document.getElementsByClassName("closepop")[i].addEventListener("click",function(){
        document.getElementsByClassName("pop-up")[i].style.display = "none"
    })
}
function drop(){
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  if(document.getElementsByClassName("profile-box")[0].clientHeight <= 600.781){
    document.getElementsByClassName("footer")[0].style.position = "absolute";
}
</script>