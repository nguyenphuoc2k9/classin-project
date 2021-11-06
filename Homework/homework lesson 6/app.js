
var html = `<div id="song_container">
<div class="song" song_id="78ab12">
  <h4 class="title">Girls like you</h4>
  <h5 class="artist">Maroon 5</h5>
  <i>Delete</i>
  <i>Edit</i>
  <i>More</i>
</div>
<hr>
<div class="song" song_id="ab762">
  <h4 class="title">Waiting for love</h4>
  <h5 class="artist">Avicii</h5>
  <i>Delete</i>
  <i>Edit</i>
  <i>More</i>
</div>
<hr>
<div class="song" song_id="12354">
  <h4 class="title">Whatever it takes</h4>
  <h5 class="artist">Imagine Dragons</h5>
  <i>Delete</i>
  <i>Edit</i>
  <i>More</i>
</div>
</div>`
var box = document.getElementById("box")
var song_container = document.getElementById("song_container")
box.insertAdjacentHTML("beforeend" , html)
var song = document.getElementsByClassName("song")
console.log(song)
for(i = 0; i < song.length;i++){
  var deletebtn = song[i].children[2]
  console.log(deletebtn);
  deletebtn.addEventListener("click" , function(e){
    var parent = e.target.parentNode
    parent.remove()
  })
  var edit = song[i].children[3]
  edit.addEventListener("click", function(e){
    var id = e.target.parentNode 
    var si = id.getAttribute("song_id")
    console.log(si)
  })
  var more = song[i].children[4]
  more.addEventListener("click", function(e){
    x = e.target.parentNode
    si = x.getAttribute("song_id")
    for(k = 0;k<2;k++){
      y = x.children[k].textContent
      console.log(y)
    }
    console.log(si)

  })
}