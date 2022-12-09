<script text="java/script">
//log out
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
if(document.documentElement.clientHeight >= 1000){
    document.getElementsByClassName("footer")[0].style.position = "absolute";
}
</script>