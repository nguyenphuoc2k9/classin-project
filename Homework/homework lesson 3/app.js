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
    if (leap % 4 != 0) {
        alert("the year" +" "+ leap +" "+ "is not a leap year")
    }
    else {
        if (leap % 100 != 0 && leap % 4 == 0) {
            alert("the year" +" "+ leap +" "+ "is a leap year")
        }
        else if (leap % 100 == 0) {
            if (leap % 400 != 0) {
                alert("the year" +" "+ leap +" "+ "is a not leap year")
            }
            else if (leap % 100 ==0) {
                alert("the year" +" "+ leap +" "+ "is a leap year")
            }
        }
    }
}
//task 3
function task3(){
    var a = prompt("Enter your number :")
    var b = prompt("Enter your number :")
    var c = prompt("Enter your number :")
    if (a == 0 && b == 0 && c == 0) {
        alert("there's nothing to be solved.")
    }
    if (a == 0 && b == 0 && c != 0) {
        alert("the equation has no root.")
    }
    if (a == 0 && b != 0 && c != 0) {
        x  = - c/b
        alert(x)
    }
    if (a != 0 && b != 0 && c != 0){
        var answer = b*b - 4*a*c
        if (answer < 0) {
            alert("the equation has no real root.")
        }
<<<<<<< HEAD
        else{
            x1 = double.dsqrt = Math.sqrt -b +((b * b) - (4 * a * c));
            x2 = double.dsqrt = Math.sqrt  - b - ((b * b) - (4 * a * c));
            alert(x1)
            alert(x2)
=======
        else if (answer != 0){
            var x1 = (-b + Math.sqrt(b * b - 4 * a * c))/2*a;
            var x2 = (-b - Math.sqrt(b * b - 4 * a * c))/2*a;
            alert("roots 1 is " + x1)
            alert("roots 2 is " + x2)
>>>>>>> a87fca47179e87e45eedd67872624239c35d60b2
        }
    }
}