//task 1
function task1(){
    var q1 = prompt("what's your name ?")
    if (q1 < 13) {
        alert("Not for kids")
    }
    else if(q1 > 19) {
        alert("You're too old")
    }
    else if (12 < q1 < 20) {
        alert("Welcome, teenager")
    }
}
//task 2 
function task2(){
    var leap = prompt("Enter your year :","Example : 2000")
    if (leap % 4 == 0  && leap % 100 == 0 || leap % 4 ==0 ) {
        alert("the year" +" "+ leap +" "+ "is a leap year")
    }
}