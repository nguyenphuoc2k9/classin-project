document.getElementById("vd").addEventListener("click", function(event){
    event.preventDefault()
        const gg = []
        var nm = document.getElementById("name").value
        var em = document.getElementById("email").value
        if (nm == ""){
            alert("please enter a name")
        }
        else{
            var we = document.getElementById("web").value
            var cm = document.getElementById("cmt").value
            var grender = document.querySelector('input[name="rate"]:checked').value;
            gg.push(nm,em,we,cm,grender)
        }
        if (em == ""){
            alert("please enter a email")
        }
        console.log(gg)
  });
  