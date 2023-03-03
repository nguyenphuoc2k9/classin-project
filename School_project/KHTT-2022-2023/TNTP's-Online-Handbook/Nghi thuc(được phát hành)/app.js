// function getPagelist(totalPages,page,maxlength){
//     function range(start,end){
//         return Array.from(Array(end-start +1),(_,i)=>i+start)
//     }
//     var sidewith = maxlength < 9? 1 :2
//     var leftwidth = (maxlength - sidewith *2 -3)>>1
//     var rightwidth = (maxlength -sidewith *2 -3)>>1
//     if(totalPages <= maxlength){
//         return range(1,totalPages)
//     }
//     if(page <= maxlength-sidewith-1-rightwidth){
//         return range(1,maxlength - sidewith -1).concat(0,range(totalPages-sidewith-1-rightwidth+1,totalPages))
//     }
//     if(page >= totalPages - sidewith-1-rightwidth){
//         return range(1,sidewith).concat(0,range(totalPages - sidewith - 1 -rightwidth - leftwidth, totalPages))
//     }
//     return range(1,sidewith).concat(0,range(page - leftwidth, page + rightwidth)).concat(0,range(totalPages -sidewith +1,totalPages))
// }
// $(function(){
//     var numberofitems = $(".info-box .card").length
//     var limitperpage = 1
//     var totalPages = Math.ceil(numberofitems / limitperpage)
//     var paginationsize = 7;
//     var currentpage;
//     function showpage(whichpage){
//         if(whichpage < 1 || whichpage > totalPages) return false
//         currentpage = whichpage
//         $(".info-box .info").hide().slice((currentpage-1) * limitperpage, currentpage * limitperpage).show()
//         $(".section li").slice(1,-1).remove()
//         getPagelist(totalPages,currentpage,paginationsize).forEach(item =>{
//             $("<li>").addclass("page-item").addclass(item ? "current-page": "dots").toggleClass("active", item === currentpage).append($("<p>").addclass("page-link").attr({href: "javascript:void(0"})).text(item||"...").insertBefore("")
//         })
//     }
// })
var infos = document.querySelectorAll(".info")
const btns = document.querySelectorAll(".page-item")
var currentpage;
var lastpageindex = 0
function change_page(index) {
    for (i = 0; i < infos.length; i++) {
        if (infos[i].className == "info active") {
            currentpage = infos[i]
        }
    }
    if (infos[index] != currentpage) {
        lastpageindex = index
        infos[index].classList.add("active")
        currentpage.classList.remove("active")
    }
}
function section_clicked(e) {
    console.log(e);
    var index = Number(e.querySelector("p").innerText) - 1
    change_page(index)
    localStorage.setItem("page_index", index)
}

document.getElementById("forward").addEventListener("click", function () {
    if (lastpageindex < infos.length - 1) {
        change_page(lastpageindex + 1)
    }
})
document.getElementById("backward").addEventListener("click", function () {
    if (lastpageindex > 0) {
        change_page(lastpageindex - 1)
    }
})