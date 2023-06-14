
function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:"Vietnamese"},
        "google_translate_element"
    )
    var translate = document.getElementById("google_translate_element")
    translate.querySelector("span").style.display = "none"
    console.log();
    var child = translate.firstChild.removeChild(translate.firstChild.childNodes[1])
    console.log();
}
const open_btn = document.getElementsByClassName('open')[0]
const header = document.getElementsByTagName('header')[0]
open_btn.addEventListener('click',()=>{
    if(header.classList.contains('active')){
        header.classList.remove('active')
        open_btn.setAttribute('class','fa-solid fa-bars open')
    }else{
        header.classList.add('active')
        open_btn.setAttribute('class','fa-solid fa-xmark open active')
    }
})

//dropdown
const doc_drop = document.getElementById('doc-dropdown')
const dropdown_box = document.getElementsByClassName('dropdown-box')[0]
doc_drop.addEventListener('click', function () {
    if (dropdown_box.classList.contains('active')) {
        dropdown_box.classList.remove('active')
        dropdown_box.classList.add('refuse')
    } else {
        dropdown_box.classList.add('active')
        dropdown_box.classList.remove('refuse')
    }
})
const user_drop = document.getElementById('user-drop')
const header_user_box = document.getElementsByClassName('header-user-drop')[0]
header_user_box.style.display = 'none'
user_drop.addEventListener('click', () => {
    if (header_user_box.style.display == 'none') {
        header_user_box.style.display = 'flex'
    } else {
        header_user_box.style.display = 'none'
    }
})
