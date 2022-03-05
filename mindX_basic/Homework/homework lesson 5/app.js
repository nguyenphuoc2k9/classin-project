function t1(){
    for (i = 0;i < 16;i++){
        if(i % 2 == 0){
            alert(i +" "+ "is even")
        }
        else{
            alert(i +" "+ "is odd")
        }
    }
}
function t2(){
    for (i = 0;i < 101; i++){
        if(i % 5 == 0 && i % 3 == 0){
            alert("FizzBuzz")
        }
        else if(i % 3 == 0){
            alert("Fizz")
        }
        else if(i % 5 == 0 ){
            alert("Buzz")
        }
    }
}
function t3(){
    var sum = 0;
    for (i = 0;i < 1001;i++){
        if(i % 5 == 0 && i % 3 == 0){
            sum += i
        }
    }
    console.log(sum)
}