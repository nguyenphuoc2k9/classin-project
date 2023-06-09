
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
function Export2Word(element, filename){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}