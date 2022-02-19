const student =(name, age, address)=>{
   return {
       name: name,
       age: age,
       address: address
   }
}

//ìn2
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
const smartphonesprice = () =>{
    let prices = [];
    for(let smartphone of smartPhones){
       price.push(smartphone.price); 
    }
    return prices;
}
console.log(smartphonesprice())
//bài 3
function in3(){
const foo = (x,y,z) =()=> {
	console.log( x, y, z );
}
const foo2 = () => {
	alert("Hello")
}
const foo3 = (a,b) =()=> a+b*100
}
