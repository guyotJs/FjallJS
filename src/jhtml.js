var jif = function(obj){
    var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("if");
        if(file!=null){
            for(let q = 0; q < obj.length; q++){
                if(Object.keys(obj[q]) == file){
                    if(!Object.values(obj[q])[0]){
                        elmnt.style.display="none"
                    }else{
                        elmnt.style.display="block"
                    }

                }
            }
        }
    }
}
var jelse = function(obj){
    var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("else");
        if(file!=null){
            for(let q = 0; q < obj.length; q++){
                if(Object.keys(obj[q]) == file){
                    if(!Object.values(obj[q])[0]){
                        elmnt.style.display="block"
                    }else{
                        elmnt.style.display="none"
                    }

                }
            }
        }
    }
}
var jmobile = function(){
    var z, i, elmnt, file;
    setInterval(jifloop,1)
    function jifloop(){
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            file = elmnt.getAttribute("mobile");
            if(file !=null){
                if(window.innerWidth < 600){
                    elmnt.style.display = ""
                }else{
                    elmnt.style.display = "none"
                }
            }
        }
    }
}
var jcomputer = function(){
    var z, i, elmnt, file;
    setInterval(jifloop,1)
    function jifloop(){
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            file = elmnt.getAttribute("computer");
            if(file !=null){
                if(window.innerWidth >= 600){
                    elmnt.style.display = ""
                }else{
                    elmnt.style.display = "none"
                }
            }
        }
    }
}
var jscreen = function(){
    jcomputer();
    jmobile();
}
var style = function(id, type, shift){
    var elem = document.getElementsByClassName(id)
    for(let i =0; i < elem.length; i++){
        elem[i].style.setProperty(type,shift);
    }
}
var content = function(id, type){
    var elem = document.getElementById(id)
    elem.innerHTML = type
}
var include = function(){
    var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("incl");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
          }
    }
}
var toggle = function(tg){
    if(tg){
        return false;
    }else{
        return true;
    }
}
window.main = function(){
    requestAnimationFrame( main );
    if(react() == 0){react();}
};main();
