function jdat(){
    var z, i, elmnt, file,jsonify;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("l-data");
        if(file!=null){
            jsonify = JSON.parse(file)
            return jsonify;
        }
    }
};let data = jdat()
function toggle(){
    var z, i, elmnt, file,jsonify;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("l-toggle");
        if(file!=null){
            elmnt.File = file;
            elmnt.addEventListener("click",function(evt){
                for(let q = 0; q < Object.keys(data).length;q++){
                    if(Object.keys(data)[q] == evt.currentTarget.File){
                        if(Object.values(data)[q] == true){
                            data[evt.currentTarget.File] = false;
                        }else{
                            data[evt.currentTarget.File] = true;
                        }
                    }
                }
            });
        }
    }
};toggle();
function exe(){
    var z, i, elmnt, file,jsonify;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("l-exe");
        if(file!=null){
            try{
                for(let i = 0;i<Object.keys(data).length;i++){
                    if(file.includes(Object.keys(data)[i])){    
                        file = file.replace(Object.keys(data)[i],`data["${Object.keys(data)[i]}"]`)
                        eval(file);
                    }
                }
            } catch(error){
                alert("Error:"+error)
            }
        }
    }
};exe();
function clicker(){
    var z, i, elmnt, file,jsonify;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("l-click");
        if(file!=null){
            elmnt.File = file;
            elmnt.already = false;
            elmnt.addEventListener("click",function(evt){
                try{
                    for(let i = 0;i<Object.keys(data).length;i++){
                        if(evt.currentTarget.File.includes(Object.keys(data)[i])){
                            if(!evt.currentTarget.already){
                                evt.currentTarget.File = evt.currentTarget.File.replace(Object.keys(data)[i],`data["${Object.keys(data)[i]}"]`)
                                evt.currentTarget.already=true;
                            }
                        }
                    }
                    eval(evt.currentTarget.File);
                    // alert(evt.currentTarget.File)
                    // alert(data["counter"])
                }catch (error){
                    console.log("Error with clicker():"+error)
                }
            });
        }
    }
};clicker();
function jif(){
    var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("l-if");
        if(file!=null){
            try{
                for(let i = 0;i<Object.keys(data).length;i++){
                    if(file.includes(Object.keys(data)[i])){    
                        file = file.replace(Object.keys(data)[i],`data["${Object.keys(data)[i]}"]`)
                        if(eval(file)){
                            elmnt.style.display="block"
                        }else{
                            elmnt.style.display="none"
                        }
                    }
                }
            }catch (error){
                console.log("Error in jif:"+error)
            }
        }
    }
};
function jelse(){
    var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("l-else");
        if(file!=null){
            try{
                for(let i = 0;i<Object.keys(data).length;i++){
                    if(file.includes(Object.keys(data)[i])){    
                        file = file.replace(Object.keys(data)[i],`data["${Object.keys(data)[i]}"]`)
                        if(eval(file)){
                            elmnt.style.display="none"
                        }else{
                            elmnt.style.display="block"
                        }
                    }
                }
            }catch (error){
                console.log("Error in jelse:"+error)
            }
        }
    }
};
function jinit(){
    var z, i, elmnt, file,cloneText;
    z = document.getElementsByTagName("*");
    for (q = 0; q < z.length; q++) {
        elmnt = z[q];
        let pile = elmnt.textContent
        file = elmnt.getAttribute("lint");
        if(file!=null){
            for(let i = 0;i<Object.keys(data).length;i++){
                if(pile.includes(`{{${Object.keys(data)[i]}}}`)){
                    jinitHelper(elmnt,pile,Object.keys(data)[i],i);
                }
            }
        }
    }
};jinit();
function jinitHelper(elmnt,text,v,dat){
    setInterval(function(){
        elmnt.textContent = text.replace(`{{${v}}}`,`${Object.values(data)[dat]}`)
    },1)
}
function jfor(){
    var z, i, elmnt, file,childCreate;
    z = document.getElementsByTagName("*");
    var para;
    for (q = 0; q < z.length; q++) {
        elmnt = z[q];
        file = elmnt.getAttribute("l-for");  
        childCreate = elmnt.getAttribute("for-item")
        childStyle = elmnt.getAttribute("item-class")  
        if(file!=null){
            for(let i = 0;i<Object.keys(data).length;i++){
                if(file.includes(Object.keys(data)[i])){
                    for(item in Object.values(data)[i]){
                        para = document.createElement(childCreate);
                        para.classList = childStyle;
                        elmnt.appendChild(para);
                        jforHelper(para,item,Object.keys(data)[i],Object.values(data).length,elmnt,childCreate,childStyle);
                    }
                    jforNewHelper(Object.keys(data)[i],childCreate,childStyle,elmnt);
                }
            }
        }
    }
};jfor()
function jforHelper(guy,i,key,ogsize,elmnt,childCreate,childStyle){
    setInterval(function(){
        guy.innerText = data[key][i];
    },1);
}
function jforNewHelper(key,type,style,elmnt){
    var para;
    ogsize=data[key].length;
    setInterval(function(){
        if(ogsize!=data[key].length&&elmnt.childNodes.length != data[key].length){
            ogsize=data[key].length;
            para = document.createElement(type)
            para.classList = style;
            elmnt.appendChild(para);
            jforHelper(para,data[key].length-1,key)
        }
    },1)
};
function jbind(){
    var z, i, elmnt, file,cloneText,key;
    z = document.getElementsByTagName("*");
    for (q = 0; q < z.length; q++) {
        elmnt = z[q];
        file = elmnt.getAttribute("l-bind");
        if(file!=null){
            for(let i = 0;i<Object.keys(data).length;i++){
                if(file.includes(Object.keys(data)[i])){    
                   key = Object.keys(data)[i]
                   jbindHelper(elmnt,key)
                }
            }
        }
    }
};
function jbindHelper(elmnt,key){
    setInterval(function(){
        data[key] = elmnt.value
    },1)
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
var include = function(){
    var z, i, elmnt, dat;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        dat = elmnt.getAttribute("incl");
        if (dat) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              }
            }      
            xhttp.open("GET", dat, true);
            xhttp.send();
            return;
          }
    }
};
var jscreen = function(){
    jcomputer();
    jmobile();
}
function react(){
    jif();
    jscreen();
    include();
    jelse();
    jbind();
}
window.main = function(){
    requestAnimationFrame( main );
    react();
};main();
