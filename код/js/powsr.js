function POW(x,n) {

  var x = document.getElementsByClassName("vva")[0].value;
  var n = document.getElementsByClassName("vvb")[0].value;

  if (n>0) {
    let pow = x**n;

    document.getElementById("demo").innerHTML = x + "<sup>" +n+ "</sup>" + "<br>" + "<br>" + "=" + "<br>" + "<br>" + pow;
  } else {
    document.getElementById("demo").innerHTML = "Введи натуральное число" ;
  }
}
