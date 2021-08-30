function POW(x,n) {

  var x = document.getElementsByClassName("vva")[0].value;
  var n = document.getElementsByClassName("vvb")[0].value;

    if (n>0) {
      var pow = x**n;


if (pow%1 !==0) {
  if (pow%1 > 0 && pow%1 <= 0.9) {
    pow=pow.toFixed(1)
  } else if (pow%1 > 0.9 && pow%1 <= 0.99) {
    pow=pow.toFixed(2)
  } else if (pow%1 > 0.99 && pow%1 <= 0.999) {
    pow=pow.toFixed(3)
  } else if (pow%1 > 0.999 && pow%1 <= 0.9999) {
    pow=pow.toFixed(4)
  } else if (pow%1 > 0.9999 && pow%1 <= 0.99999) {
    pow=pow.toFixed(5)
  } else if (pow%1 > 0.99999 && pow%1 <= 0.999999) {
    pow=pow.toFixed(6)
  }
  else {
pow=pow.toFixed(7)
  }

}


      document.getElementById("demo").innerHTML = x + "<sup>" +n+ "</sup>" + "<br>" + "<br>" + "=" + "<br>" + "<br>" + pow;
    } else if (n==0) {
      document.getElementById("demo").innerHTML = x + "<sup>" +n+ "</sup>" + "<br>" + "<br>" + "=" + "<br>" + "<br>" + 1 + "<br>" + "<br>" + "Любое число в нулевой степени дает 1" ;
    } else if (n<0) {
      var pow1 = 1/(x**(-n));

      if (pow1%1 !==0) {
        if (pow1%1 > 0 && pow%1 <= 0.9) {
          pow1=pow1.toFixed(1)
        } else if (pow1%1 > 0.9 && pow1%1 <= 0.99) {
          pow1=pow1.toFixed(2)
        } else if (pow1%1 > 0.99 && pow1%1 <= 0.999) {
          pow1=pow1.toFixed(3)
        } else if (pow1%1 > 0.999 && pow1%1 <= 0.9999) {
          pow1=pow1.toFixed(4)
        } else if (pow1%1 > 0.9999 && pow1%1 <= 0.99999) {
          pow1=pow1.toFixed(5)
        } else if (pow1%1 > 0.99999 && pow1%1 <= 0.999999) {
          pow1=pow1.toFixed(6)
        }
        else {
      pow1=pow1.toFixed(7)
        }
}
      document.getElementById("demo").innerHTML = x + "<sup>" +n+ "</sup>" + "<br>" + "<br>" + "=" + "<br>" + "<br>" + pow + " или 1/" + x + "<sup>" +(-n)+ "</sup>" + " или 1/" +  x**(-n) ;
    } else {
      document.getElementById("demo").innerHTML = "Что-то записано неверно :()"
    }

}
