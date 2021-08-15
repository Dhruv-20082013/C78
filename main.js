var names = [
"My father (Mr Naresh Rastogi)",
"My Mother (Mrs Sonia Rastogi)",
"My Sister (Ms Vasihnavi Rastogi)",
"Me (Dhruv Rastogi)"];

var images = [
"img2.jpeg",
"img1.jpeg",
"img3.jpeg",
"img4.jpeg"];

var i = 0 ;

function next_img() {
    i++;

document.getElementById("one").innerHTML = names[i];
document.getElementById("family_img").src = images[i];
if(i==4) {

i=0;

}}



