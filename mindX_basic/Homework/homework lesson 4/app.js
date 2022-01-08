//task 1
function task1(){
    var q = prompt("welcome to our shop , what do you want ?")
    var item = ["T-shirt","Sweater"]
    if (q == "R"){
        alert("Our items : " + item)
    }
    else if (q == "C") {
        var ni = prompt("Enter new item :")
        item.push(ni)
        alert("Our items : " + item)
    }
    else if(q == "U"){
        var po = prompt("Update Positsion :")
        var ni2 = prompt("New item ?")
        item[po] = ni2
        alert("Our items : " + item)
    }
    else if (q == "D"){
        var de = prompt("Delete position ?")
        item.splice = (de,1)
        alert("Our items : " + item)
    }
}
//task 2
var inventory = {
    'gold' : 500,
    'pound' : ['flint','twine','gemstone'],
    'backpack' : ['xylophone','dagger','bedroll','bread loaf']
}
function task2(){
    inventory.pocket = ['seashell','strange berry','lint']
    inventory.gold += 50;
    delete inventory.pound
    inventory.backpack.splice(1,1)
    console.log(inventory)    
}