function POW(x,n) {

  var x = document.getElementsByClassName("vva")[0].value;
  var n = document.getElementsByClassName("vvb")[0].value;

    if (n>0) {
      var pow = x**n;

      document.getElementById("demo").innerHTML = x + "<sup>" +n+ "</sup>" + "<br>" + "<br>" + "=" + "<br>" + "<br>" + pow;
    } else if (n==0) {
      document.getElementById("demo").innerHTML = x + "<sup>" +n+ "</sup>" + "<br>" + "<br>" + "=" + "<br>" + "<br>" + 1 + "<br>" + "<br>" + "Любое число в нулевой степени дает 1" ;
    } else if (n<0) {
      var pow1 = 1/(x**(-n));
      document.getElementById("demo").innerHTML = x + "<sup>" +n+ "</sup>" + "<br>" + "<br>" + "=" + "<br>" + "<br>" + pow1 + " или 1/" + x + "<sup>" +(-n)+ "</sup>" + " или 1/" +  x**(-n) ;
    } else {
      document.getElementById("demo").innerHTML = "Что-то записано неверно :()"
    }

}
