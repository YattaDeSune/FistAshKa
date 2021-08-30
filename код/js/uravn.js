function mz() {
  var a = document.getElementsByClassName("vva")[0].value;
  var b = document.getElementsByClassName("vvb")[0].value;
  var c = document.getElementsByClassName("vvc")[0].value;
  if (a==0) {
    a=0
  }
  if (b==0) {
    b=0
  }
  if (c==0) {
    c=0
  }
var a1=a;
var a2=a;
var b1=b;
var b2=b;
var c1=c;
var c2=c;
var z="x²";
var z1="x";
var p="+";
var p1="+";
var D=b*b-4*a*c;
var prex1 =(-b+Math.sqrt(D))/(2*a);
var prex2 =(-b-Math.sqrt(D))/(2*a);
var x1= (Math.floor(prex1 * 1000) / 1000);
var x2= (Math.floor(prex2 * 1000) / 1000);
if (a==1){
  a1="";
} else if (a==-1){
  a1="-";
} else if (a==0){
  a1="";
  z="";
  p="";
};
if (b<-1){
  p="";
} else if (b==-1){
  b1="-";
  p="";
} else if (b==0){
  b1="";
  p="";
  z1=""
} else if (b==1){
  b1="";
};
if (c<0){
  p1="";
} else if (c==0){
  p1="";
  c1="";
};
if (b<0){
  b2="("+b+")";
};
if (a<0){
  a2="("+a+")";
};
if (c<0){
  c2="("+c+")";
};
if (a==0){
  document.getElementById("demo").innerHTML = "Это не квадратное уравнение; а не должно равняться нулю";
  document.getElementById("demo1").innerHTML = "";
} else {
document.getElementById("demo").innerHTML = "РЕШЕНИЕ: <br><br>"
 + a1+z+p+b1+z1+p1+c1+"="+0+"<br>"+"a="+a+"; b="+b+"; c="+c+"<br>"
 +"D="+b2+"²-4*"+a2+"*"+c2+"="+D+"<br>";
if (D<0){
  document.getElementById("demo1").innerHTML = "Дискриминант меньше нуля - корней нет."
  +"<br>"+"<br>"+"Ответ: нет корней";
} else if (D==0) {
  document.getElementById("demo1").innerHTML = "Дискрименант равен нулю - один корень:"
  +"<br>"+"x=-"+b2+"/(2*"+a2+")="+x1+"<br>"+"<br>"+"Ответ: "+x1+".";
} else if (D>0) {
  document.getElementById("demo1").innerHTML ="Дискрименант больше нуля - два корня:"
  +"<br>"+"x1=(-"+b2+"+"+"✓"+D+")/(2*"+a2+")="+x1
  +"<br>"+"x2=(-"+b2+"-"+"✓"+D+")/(2*"+a2+")="+x2
  +"<br>"+"<br>"+"Ответ: "+x1+"; "+x2+".";
}
}
}
