function fun1() {
  var xxx=0;
  var yyy=0;
  document.getElementById("nm0").innerHTML = null;
  document.getElementById("al0").innerHTML = null;
  document.getElementById("al10").innerHTML = null;
  document.getElementById("al1").innerHTML = null;
  document.getElementById("al2").innerHTML = null;
  document.getElementById("al3").innerHTML = null;
  document.getElementById("al4").innerHTML = null;
  document.getElementById("al5").innerHTML = null;
  var ab1 = document.getElementsByClassName("ab1")[0].value;
  var abn = document.getElementsByClassName("abn")[0].value;
  var nnn = document.getElementsByClassName("nnn")[0].value;
  var dq = document.getElementsByClassName("dq")[0].value;
  var abs = document.getElementsByClassName("abs")[0].value;
  var arr1 = [ab1, abn, nnn, dq, abs];
  var arr1use = [ab1, abn, nnn, dq, abs];
  for (var p=0; p < 6; p++) {
        if (arr1[p]<0) {
        arr1use[p]= "("+arr1[p]+")";
        }
      }
  var a11 = arr1[1] - arr1[3] * (arr1[2]-1);
  var a12 = (2*arr1[4])/arr1[2]-arr1[1];
  var a13 = (2*arr1[4]/arr1[2]-arr1[3]*(arr1[2]-1))/2;
  var an1 = (arr1[3]*(arr1[2]-1))-(-arr1[0]);
  var an2 = (2*arr1[4]/arr1[2])-arr1[0];
  var an3 = ((2*arr1[4])/arr1[2])-a13;
  var nnn1 = ((arr1[1]-arr1[0])/arr1[3])+1;
  var nnn20 = (2*arr1[4])/(arr1[1]-(-arr1[0]));
  var dq1 = (arr1[1]-arr1[0])/(arr1[2]-1);
  var dq2 = (((2*arr1[4])/arr1[2])-2*arr1[0])/(arr1[2]-1);
  var dq3 = (2*arr1[1]-(2*arr1[4]/arr1[2]))/(arr1[2]-1);
  var abs1 = ((arr1[0]-(-arr1[1]))/2)*arr1[2];
  var abs2 = ((2*arr1[0]+((arr1[2]-1)*arr1[3]))/2)*arr1[2];
  var arr2 = [];
  var prov = arr1[2]+0-0;
  var rad=document.getElementsByName('r1');
  if (arr1[2]==0 && arr1[2]=="0") {
         document.getElementById("al0").innerHTML =
           "КОЛИЧЕСТВО ЭЛЕМЕНТОВ (n) ДОЛЖНО БЫТЬ БОЛЬШЕ НУЛЯ." +"<br><br>"+
           "ВВЕДИ ЗНАЧЕНИЕ -n- НОРМАЛЬНО.";
       }
       else if (arr1[2]==0 && arr1[2]=="-0") {
         document.getElementById("al0").innerHTML =
           "КТО ВООБЩЕ ПИШЕТ -0???????????";
       }
       else if (arr1[2]<0) {
         document.getElementById("al0").innerHTML =
         "КОЛИЧЕСТВО ЭЛЕМЕНТОВ (n) НЕ МОЖЕТ БЫТЬ МЕНЬШЕ НУЛЯ." +"<br><br>"+
         "ВВЕДИ ЗНАЧЕНИЕ -n-  НОРМАЛЬНО.";
       }
       else if (arr1[2]%1!=0) {
         document.getElementById("al0").innerHTML =
         "КОЛИЧЕСТВО ЭЛЕМЕНТОВ (n) ДОЛЖНО БЫТЬ ЦЕЛЫМ ЧИСЛОМ.<br>ВВЕДИ ЗНАЧЕНИЕ -n-  НОРМАЛЬНО."
       }
       else {
   if (rad[0].checked)  {

      document.getElementById('arifmcss').style.color='#54e371';
      document.getElementById('geomcss').style.color='white';
      for (var i=0; i < 6; i++) {
        if (arr1[i]==0 && arr1[i]!=="0") {
        arr2[i]=0;
      }
      else if (!isNaN(arr1[i])) {
        arr2[i]=1;
         }
       }
       if (arr2[0]==0) {
         if (arr2[1]==1 && arr2[2]==1 && arr2[3]==1) {
           document.getElementById("al1").innerHTML =
         "a<sub>n</sub> = a<sub>1</sub>+d(n-1) =>   a<sub>1</sub> = a<sub>n</sub>-d(n-1) =>" +
         "<br> =>   a<sub>1</sub> = " + arr1[1] + "-"+arr1use[3]+"*("+ arr1[2]+"-1) = "+ a11 +"<br><br>"+
         "Ответ: a<sub>1</sub> = " + a11 +".<br>&nbsp";
         }
         else if (arr2[1]==1 && arr2[2]==1 && arr2[4]==1) {
           document.getElementById("al1").innerHTML =
         "S<sub>n</sub> = ((a<sub>1</sub>+a<sub>n</sub>)/2)*n =>  a<sub>1</sub> = (2S/n)-a<sub>n</sub> =>" +
         "<br> =>  a<sub>1</sub> = (2*"+arr1use[4]+"/"+arr1use[2]+")-"+arr1use[1]+" ="+a12 +
         "<br><br>Ответ: a<sub>1</sub> = " + a12 +".<br>&nbsp";
         }
         else if (arr2[2]==1 && arr2[3]==1 && arr2[4]==1) {
           document.getElementById("al1").innerHTML =
         "S<sub>n</sub> = ((2a<sub>1</sub>+d(n-1))/2)*n =>  2S<sub>n</sub>/n = 2a<sub>1</sub>+d(n-1) =>  a<sub>1</sub> = ((2S<sub>n</sub>/n)-d(n-1))/2 => <br>"+
         "=>  a<sub>1</sub> = ((2*"+arr1use[4]+"/"+arr1[2]+")-"+arr1use[3]+"("+arr1[2]+"-1))/2 = "+ a13 +
         "<br><br>Ответ: a<sub>1</sub> = " + a13 +".<br>&nbsp";
         }
         else if (arr2[1]==1 && arr2[3]==1 && arr2[4]==1) {
         document.getElementById("al1").innerHTML =
           "&nbsp";
           xxx=1;
         }
       else {
          yyy=1
          }
       }
       if (arr2[1]==0) {
         if (arr2[0]==1 && arr2[2]==1 && arr2[3]==1) {
           document.getElementById("al2").innerHTML =
             "a<sub>n</sub> = a<sub>1</sub>+d(n-1) => <br> "+
             "a<sub>n</sub> ="+arr1[0]+"+"+arr1use[3]+"*("+arr1[2]+"-1) = "+an1+
             "<br><br>Ответ: a<sub>n</sub> = " + an1 +".<br>&nbsp";
         }
         else if (arr2[0]==1 && arr2[2]==1 && arr2[4]==1) {
           document.getElementById("al2").innerHTML =
            "S<sub>n</sub> = (a<sub>1</sub>+a<sub>n</sub>)/2*n =>  a<sub>n</sub> = (2S<sub>n</sub>/n)-a<sub>1</sub> => <br>"+
            "a<sub>n</sub> = (2*"+arr1use[4]+"/"+arr1[2]+")-"+arr1use[0]+" = "+an2+
            "<br><br>Ответ: a<sub>n</sub> = " + an2 +".<br>&nbsp";
         }
         else if (arr2[2]==1 && arr2[3]==1 && arr2[4]==1) {
           document.getElementById("al2").innerHTML =
           "S<sub>n</sub> = (a<sub>1</sub>+a<sub>n</sub>)/2*n => "+
           "a<sub>n</sub> = (2S<sub>n</sub>/n)-a<sub>1</sub>;<br>"+
           "S<sub>n</sub> = (2a<sub>1</sub>+d(n-1))/2*n =>  2S<sub>n</sub>/n = 2a<sub>1</sub>+d(n-1) =>  a<sub>1</sub> = ((2S<sub>n</sub>/n)-d(n-1))/2; <br>"+
           "a<sub>n</sub> = (2S<sub>n</sub>/n)-((2S<sub>n</sub>/n)-d(n-1))/2 =>  a<sub>n</sub> = (2S<sub>n</sub>+d*n(n-1))/2n => <br>"+
           "a<sub>n</sub> = (2*"+arr1use[4]+"+"+arr1use[3]+"*"+arr1use[2]+"("+arr1[2]+"-1))/"+2*arr1[2]+" = "+an3+
           "<br><br>Ответ: a<sub>n</sub> = " + an3 +".<br>&nbsp";
         }
         else if (arr2[0]==1 && arr2[3]==1 && arr2[4]==1) {
          xxx=1;
          }
         else {
           yyy=1
         }
       }
       if (arr2[2]==0) {
         if (arr2[0]==1 && arr2[1]==1 && arr2[3]==1) {
           document.getElementById("al3").innerHTML =
           "a<sub>n</sub> = a<sub>1</sub>+d(n-1) => (a<sub>n</sub>-a<sub>1</sub>)/d = n-1 => n = ((a<sub>n</sub>-a<sub>1</sub>)/d)+1 =><br>"+
           "n = (("+arr1[1]+"-"+arr1use[0]+")/"+arr1[3]+")"+"+1 = "+nnn1+
           "<br><br>Ответ: n = " + nnn1 +".<br>&nbsp";
           if (nnn1%1!=0 || nnn1<=0) {
        document.getElementById("nm0").innerHTML =
          "ПОЛУЧЕННОЕ ЗНАЧЕНИЕ -n- НЕНАТУРАЛЬНОЕ ЧИСЛО.<br> ВЫ ТОЧНО ВВЕЛИ ВЕРНЫЕ ДАННЫЕ?<br><br>"
      }
           }
         else if (arr2[0]==1 && arr2[1]==1 && arr2[4]==1) {
           document.getElementById("al3").innerHTML =
           "S<sub>n</sub> = ((a<sub>1</sub>+a<sub>n</sub>)/2)*n => n = (2S<sub>n</sub>)/a<sub>1</sub>+a<sub>n</sub> => <br>"+
           "n = (2*"+arr1use[4]+")/("+arr1[0]+"+"+arr1use[1]+") ="+nnn20+
           "<br><br>Ответ: n = " + nnn20 +".<br>&nbsp";
           if (nnn20%1!=0 || nnn20<=0) {
        document.getElementById("nm0").innerHTML =
          "ПОЛУЧЕННОЕ ЗНАЧЕНИЕ -n- НЕНАТУРАЛЬНОЕ ЧИСЛО.<br> ВЫ ТОЧНО ВВЕЛИ ВЕРНЫЕ ДАННЫЕ?<br><br>"
      }

   }
         else if (arr2[0]==1 && arr2[3]==1 && arr2[4]==1){
           document.getElementById("al3").innerHTML =
           " ";
           xxx=1;
   }
         else if (arr2[1]==1 && arr2[3]==1 && arr2[4]==1){
           document.getElementById("al3").innerHTML =
           "";
           xxx=1;
   }
         else {
           yyy=1
         }
}
      if (arr2[3]==0) {
        if (arr2[0]==1 && arr2[1]==1 && arr2[2]==1) {
          document.getElementById("al4").innerHTML =
           "a<sub>n</sub> = a<sub>1</sub>+d(n-1) => d = (a<sub>n</sub>-a<sub>1</sub>)/(n-1) => <br>"+
           "d = ("+arr1[1]+"-"+arr1use[0]+")/("+arr1[2]+"-1) ="+ dq1+
           "<br><br>Ответ: d = " + dq1 +".<br>&nbsp";
        }
        else if (arr2[0]==1 && arr2[2]==1 && arr2[4]==1) {
          document.getElementById("al4").innerHTML =
          "S<sub>n</sub> = ((2a<sub>1</sub>+d(n-1))/2)*n => 2S/n = 2a<sub>1</sub>+d(n-1) => d = (((2S<sub>n</sub>)/n)-2a<sub>1</sub>)/(n-1) =>  <br>"+
          "d = (((2*"+arr1use[4]+")/"+arr1[2]+")-2*"+arr1use[0]+")/"+arr1[2]+"-1 = "+ dq2+
          "<br><br>Ответ: d = " + dq2 +".<br>&nbsp";
      }
        else if (arr2[1]==1 && arr2[2]==1 && arr2[4]==1) {
          document.getElementById("al4").innerHTML =
            "S<sub>n</sub> = ((2a<sub>1</sub>+d(n-1))/2)*n => 2S/n = 2a<sub>1</sub>+d(n-1) => d = (((2S<sub>n</sub>)/n)-2a<sub>1</sub>)/(n-1);  <br>"+
            "a<sub>1</sub> = (2S<sub>n</sub>/n)-a<sub>n</sub>;<br>"+
            "d = (((2S<sub>n</sub>)/n)-2((2S<sub>n</sub>)/n)-a<sub>n</sub>)/(n-1) => "+
            "d = (2a<sub>n</sub>-(2S<sub>n</sub>/n))/(n-1) => <br>"+
            "d = (2*"+arr1use[1]+"-(2*"+arr1use[4]+"/"+arr1[2]+"))/("+arr1[2]+"-1) = "+ dq3+
            "<br><br>Ответ: d = " + dq3 +".<br>&nbsp";
          }
        else if (arr2[0]==1 && arr2[1]==1 && arr2[4]==1) {
          xxx=1;
      }
        else {
          yyy=1;
        }
      }
      if (arr2[4]==0) {
        if (arr2[0]==1 && arr2[1]==1 && arr2[2]==1) {
          document.getElementById("al5").innerHTML =
            "S<sub>n</sub> = ((a<sub>1</sub>+a<sub>n</sub>)/2)*n => <br>"+
            "S<sub>n</sub> = (("+arr1[0]+"+"+arr1use[1]+")/2)*"+arr1[2]+" = "+ abs1+
            "<br><br>Ответ: S<sub>n</sub> = " + abs1 +".<br>&nbsp";
      }
        else if (arr2[0]==1 && arr2[3]==1 && arr2[2]==1) {
          document.getElementById("al5").innerHTML =
          "S<sub>n</sub> = ((2a<sub>1</sub>+d(n-1))/2)*n =><br>"+
          "S<sub>n</sub> = ((2"+""+arr1use[0]+"+"+arr1use[3]+"("+arr1[2]+"-1))/2)*"+arr1[2]+" = "+ abs2+
          "<br><br>Ответ: S<sub>n</sub> = " + abs2 +".<br>&nbsp";
      }
        else if (arr2[1]==1 && arr2[3]==1 && arr2[2]==1) {
          xxx=1;
          }
        else if (arr2[0]==1 && arr2[3]==1 && arr2[1]==1) {
          xxx=1;
      }
        else {
          yyy=1;
        }
      }
      if (xxx==1) {
        document.getElementById("al10").innerHTML =
           "ОДНО ИЗ ЗНАЧЕНИЙ НЕ НАЙДЕНО.<br>ВВЕДИТЕ ПОЛУЧЕННОЕ ВЫШЕ / НОВОЕ ЗНАЧЕНИЕ, ДЛЯ НАХОЖДЕНИЯ НЕИЗВЕСТНОЙ.<br>&nbsp";
      }
      if (yyy==1) {
        document.getElementById("al0").innerHTML =
           "НЕДОСТАТОЧНО ВВЕДЕННЫХ ДАННЫХ ДЛЯ РЕШЕНИЯ.<br>&nbsp"
}
}
   else if (rad[1].checked) {
      document.getElementById("al0").innerHTML ="&nbsp ";
      document.getElementById('arifmcss').style.color='white';
      document.getElementById('geomcss').style.color='#54e371';
      document.getElementById("al0").innerHTML =
        "ЭТО ЕЩЕ НЕ ГОТОВО.";
        console.log("ы");
    }
    else {
      document.getElementById("al0").innerHTML ="ВЫБЕРИТЕ ТИП ПРОГРЕССИИ. ";
    }
}
}
