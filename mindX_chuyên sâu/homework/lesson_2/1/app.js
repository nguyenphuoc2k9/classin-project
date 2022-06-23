var tongtien = 0;
var nums = document.getElementsByClassName("produce-num")
for(let i=0;i<nums.length;i++){
    nums[i].value = 0
    nums[i].addEventListener("change", function(){
        let numparent = nums[i].parentElement.parentElement
        let price = numparent.getElementsByClassName("produce-price")[0]
        let total = numparent.getElementsByClassName("itemtotal")[0]
        price_content = price.innerText.replace('$', '')
        total.innerHTML = nums[i].value * price_content
        tongtien += nums[i].value * price_content 
        print()
        if(isNaN(nums[i].value)|| nums[i].value <= 0){
            nums[i].value = 1
        }
    })
}
function print(){
    let finaltotal = document.getElementById("total")
    finaltotal.innerText = tongtien
}
// function finaltotal(){
//     let finaltotal = document.getElementById("total")
//     let all_total = document.getElementsByClassName("itemtotal")
//     for(let i =0;i < all_total.length ;i++){
//         all_prices = Number(all_total[i].innerText.replace('$', ''))
//         total += all_prices
//     }
//     finaltotal.innerText = total
//     console.log(total);
// }