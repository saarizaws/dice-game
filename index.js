var r=Math.random();
var s=(r*5)+2;
var t=Math.floor(s);
var x=Math.random();
var y=(x*5)+2;
var z=Math.floor(y);
var a="images/"+"dice"+t+".png";
var b="images/"+"dice"+z+".png";
var r1=document.querySelectorAll("img")[0];
r1.setAttribute("src",a);
var r2=document.querySelectorAll("img")[1];
r2.setAttribute("src",b);
if(t>z){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if (t===z) {
  document.querySelector("h1").innerHTML="Its a Draw!";  
}
else{
  document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
