<script>
//sidenav
function drop(){
    document.getElementById("dropdown").classList.toggle("show");
}
var com_info = document.getElementById("com-info")
com_info.style.height = document.getElementById("news").clientHeight*(9.95/100) + "px"
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
var more_com= document.getElementsByClassName("com-more")
function com_more(e){
  e.addEventListener("click",function(){
    var parent = e.parentElement.parentElement
    var child = parent.getElementsByClassName("com-info")[0]
    child.classList.toggle("active")
  })
}
</script>