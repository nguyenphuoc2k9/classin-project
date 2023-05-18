
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
function dropdown_navbar(e){
    var parent = e.parentElement
    console.log(parent);
    var child = parent.getElementsByClassName('dropdown-box')[0]
    var i = parent.querySelector('i')
    display = child.style.display
    if(display == 'flex'){
        child.style.display = 'none'
        i.classList.remove("active")
        e.classList.remove('active')
        child.classList.remove('active')
    }else{
        child.style.display = 'flex'
        i.classList.add('active')
        e.classList.add("active")
        child.classList.add('active')
    }
}
function user_dropdown(e){
    var parent = e.parentElement
    console.log(parent);
    var box = parent.getElementsByClassName('user-dropdown')[0]
    var display = box.style.display
    console.log(display);
    if(display == 'none'){
        box.style.display = 'flex'
    }else{
        box.style.display = 'none'
    }
}
