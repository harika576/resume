function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	basic(data.details);
	edu(data.education);

})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(MIC){
var image=document.createElement("img");
image.src=MIC.image;
left.appendChild(image);
var name=document.createElement("h3");
name.textContent=MIC.name;
left.appendChild(name);
var email=document.createElement("h3");
email.textContent=MIC.email;
left.appendChild(email);
var phone=document.createElement("h3");
phone.textContent=MIC.phone;
left.appendChild(phone);
}

var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
var un=document.createElement("un");
right.appendChild(un);
for(var i=0;i<education.length;i++) {
	var l=document.createElement("li");
	l.textContent=education[i].course;
	un.appendChild(l);
	var l1=document.createElement("li");
	l1.textContent=education[i].college;
	un.appendChild(l1);
	var l2=document.createElement("li");
	l2.textContent=education[i].per;
	un.appendChild(l2);
}	
}
