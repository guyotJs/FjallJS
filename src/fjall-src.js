let attr = ["if","else","click","bind","for","lint","mobile","computer"]
let reactors = [];
let lints = [];
let bounds = [];
let createdFors = [];
let liveForHost = [];
let screenWatch = [];
let liveForClassStuff = []
function jdat(){
    var z, i, elmnt, file,jsonify;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("data");
        if(file!=null){
            jsonify = JSON.parse(file)
            return jsonify;
        }
    }
};let data = jdat()
function preRender(){
	var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++){
    	elmnt = z[i];
    	for(let q=0; q<attr.length;q++){
    		file = elmnt.getAttribute(attr[q]);
    		if(file!=null){
    			if(q==0||q==1){
    				addReactiveState(elmnt,attr[q],file)
    			}else if(q==2){
    				createClickHandler(elmnt,attr[q],file)
    			}else if (q==5){
    				linter(elmnt,elmnt.innerText)
    			}else if (q==3){
    				binder(elmnt,file)
    			}else if(q==4){
    				createLiveFor(elmnt,file);
    			}else if(q==6){
    				screenIfy(elmnt,"mobile")
    			}
    			else if(q==7){
    				screenIfy(elmnt,"computer")
    			}
    		}
    	}
	}
};preRender();
function createClickHandler(elmnt,type,file){
	elmnt.Type = type; elmnt.File = file; elmnt.already = false
	elmnt.addEventListener('click',function(evt){
		try{
	        for(let i = 0;i<Object.keys(data).length;i++){
	            if(evt.currentTarget.File.includes(Object.keys(data)[i])){
	                if(!evt.currentTarget.already){
	                    evt.currentTarget.File = evt.currentTarget.File.replaceAll(Object.keys(data)[i],`data["${Object.keys(data)[i]}"]`)
	                }
	            }
	        }
	        evt.currentTarget.already=true;
	        eval(evt.currentTarget.File);
	    }catch (error){
	        console.log("Error with clicker():"+error)
	    }
	});
}
function addReactiveState(elmnt,type,file){
	reactors.push([elmnt,type,file])
}
function toggle(name){
	if(name){return false;}else{return true;}
}
function linter(elmnt,text){
	lints.push([elmnt,text])
}
function screenIfy(elmnt,type){
	screenWatch.push([elmnt,type])
}
function binder(elmnt,file){
	bounds.push([elmnt,file]);
}
function createLiveFor(elmnt,file){
	var key,para;
	let childType = elmnt.getAttribute("item")
	let childClasses = elmnt.getAttribute("item-class")
	liveForClassStuff.push([childType,childClasses])
	for(let q=0;q<Object.keys(data).length;q++){
		if(file.includes(Object.keys(data)[q])){
			createdFors.push([Object.keys(data)[q],[]])
			length = createdFors.length
			liveForHost.push([Object.keys(data)[q],elmnt])
			key = Object.keys(data)[q]
			for(let i=0;i<data[key].length;i++){
				para = document.createElement(childType);
				para.classList = childClasses;
				para.innerText = data[key][i] 
				elmnt.appendChild(para);
				createdFors[length-1].push(para)
			}
		}
	}
}
window.main = function(){
	requestAnimationFrame( main );
	if(reactors.length!=0){
		for(let i = 0; i<reactors.length;i++){
			for(let q = 0; q<Object.keys(data).length;q++){
				if(reactors[i][2] == Object.keys(data)[q]){
					if(reactors[i][1]=="if"){
						if(Object.values(data)[q]==true){
							reactors[i][0].style.display = "block"
						}else if(Object.values(data)[q]==false){
							reactors[i][0].style.display = "none"
						}
					}
					else if(reactors[i][1]=="else"){
						if(Object.values(data)[q]==true){
							reactors[i][0].style.display = "none"
						}else if(Object.values(data)[q]==false){
							reactors[i][0].style.display = "block"
						}
					}
				}
			}
		}
	}
	if(lints.length !=0){
		for(let q=0;q<Object.keys(data).length;q++){
			for(let i=0;i<lints.length;i++){
				if(lints[i][1].includes(`{{${Object.keys(data)[q]}}}`)){
					lints[i][0].innerText = lints[i][1].replace(`{{${Object.keys(data)[q]}}}`,Object.values(data)[q])
				}
			}
		}
	}
	if(bounds.length !=0){
		for(let q=0;q<Object.keys(data).length;q++){
			for(let i=0;i<bounds.length;i++){
				if(bounds[i][1].includes(Object.keys(data)[q])){
					data[Object.keys(data)[q]] = bounds[i][0].value
				}
			}
		}
	}
	if(liveForHost.length !=0){
		var alreadyCreated,arrayHolding,para;
		for(let i=0;i<liveForHost.length;i++){
			if(liveForHost[i][0]==createdFors[i][0]){
				alreadyCreated= createdFors[i].length
				arrayHolding= data[liveForHost[i][0]].length
				if(arrayHolding!=(parseInt(alreadyCreated)-2)){
					para= document.createElement(liveForClassStuff[i][0])
					para.classList = liveForClassStuff[i][1];
					para.innerText = data[liveForHost[i][0]][data[liveForHost[i][0]].length-1]
					liveForHost[i][1].appendChild(para);
					createdFors[i].push(para)
				}
			}
		}
	}
	if(screenWatch.length!=0){
		for(let i=0;i<screenWatch.length;i++){
			if(screenWatch[i][1]=="mobile"){
				if(window.innerWidth <= 600){
					screenWatch[i][0].style.display="block"
				}else{
					screenWatch[i][0].style.display="none"
				}
			}
			if(screenWatch[i][1]=="computer"){
				if(window.innerWidth <= 600){
					screenWatch[i][0].style.display="none"
				}else{
					screenWatch[i][0].style.display="block"
				}
			}
		}
	}
};main();
