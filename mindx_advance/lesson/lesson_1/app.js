function checksonguyento(input){
    
    let count = 0;
    for(let i = 1;i <= input; i++){
        if(input % i ===0){
            count++;
        }
    }
    if(count ==2){
        console.log("Đây là số nguyên tố")
    } else {
        console.log("đây không phải là số nguyên tố")
    }
}