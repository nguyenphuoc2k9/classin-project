const api = "https://pokeapi.co/api/v2/pokemon/"
var i = 0;
const btn =document.getElementById("btn").onclick=()=>{
    i++;
    var value = document.getElementById("search").value
    fetch(api+value)
    
    .then((res)=>{
    return res.json()
    })
    .then((data)=>{
    console.log(data);
    findesc(data.id)
    const pokemon = {
        name: data.name,
        height:data.height,
        weight:data.weight,
        image:data.sprites['front_default'],
        type:data.types.map(type => type.type.name).join(", ")
    };
    print1(pokemon)
    console.log(pokemon);
    }).catch((error)=>{
        alert("We cant find your pokemon please try again.")
        console.log(error);
    })
}
const findesc =(id)=>{
    fetch('https://pokeapi.co/api/v2/ability/' + id)
    .then((res)=>{
    return res.json();
    }) .then((data)=>{
        const bio = data.effect_entries.map(entry=> entry.short_effect);
        console.log(data);
        console.log(bio[1]);
        print2(bio[1])
    })
}
function print1(pokemon){
    console.log(pokemon);
    console.log(pokemon.image);
    var poke = pokemon;
    var html =`
        <h1>Your result</h1>
    <div class="img">
            <img src="${poke.image}" alt="">
        </div>
        <div class="card">
            <h1>Name :</h1>
            <h1>${poke.name}</h1>
        </div>
        <div class="card">
            <h1>Type :</h1>
            <h1>${poke.type}</h1>
        </div>
        <div class="card">
            <h1>Height:</h1>
            <h1>${poke.height}</h1>
        </div>
        <div class="card">
            <h1>Weight :</h1>
            <h1>${poke.weight}</h1>
        </div>`
    document.getElementById("box-up").innerHTML = html;
}
function print2(bio){
    var html2 = `<div class="card-bio">
    <h1 class="title">Bio :</h1>
    <h1>${bio}</h1>
    </div>`
    console.log(bio);
    document.getElementById("box-down").innerHTML = html2;
}
