const currentlocation = location.href;
const menuItem = document.querySelectorAll("a")
const menulength = menu.length
var hi = document.createAttribute("class")
hi.value = "active"
for(let i = 0;i<menulength;i++){
    if(menuItem[i].href === currentlocation){
        menuItem[i].setAttributeNode(hi)
    }
}
