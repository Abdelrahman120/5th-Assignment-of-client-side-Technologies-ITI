var pigdiv=document.body.children[0];
pigdiv.style.display="flex";
pigdiv.style.flexDirection="column";
pigdiv.style.hight="100vh";//all thw view

var list=document.getElementById("nav");
list.style.textAlign="center";
list.style.listStyleType= "circle";
list.style.listStylePosition="inside";// to make the polets behiend the txt 

var img=document.getElementById("header").children[0];//the img of top and bottom
img.style.width="30%"
var cloneImg=img.cloneNode(true);//clone img
document.body.appendChild(cloneImg);//append at the end of body

var img1=document.body.firstElementChild.children[0].children[0];// tha img of top only 
img1.style.position="relative";
img1.style.float="right";


var img2=document.body.firstElementChild.children[2].children[0];// tha img of bottom only
img1.style.position="relative";
img1.style.float="left";
