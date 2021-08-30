function mz() {
  rrclr();
  var r = document.getElementsByClassName("vva")[0].value;
  var v = document.getElementsByClassName("vvb")[0].value;
var imt = v / ((r/100)*(r/100));
var result = (Math.floor(imt * 100) / 100);
  document.getElementById("demo").innerHTML = result + " кг/м²";

if ((isNaN(result)) || (v < 5) || (r < 10) ) {
  gay();
} else {
  if (result < 18.50) {
    document.getElementById("demo1").innerHTML = "Иди пирожки кушай";
    document.getElementById("first").style.backgroundColor="Orange";
  } if ((result >= 18.5) && (result < 25)) {
    document.getElementById("demo1").innerHTML = "Красаавееееец!";
    document.getElementById("second").style.backgroundColor="#54e371";
  } if ((result >= 25) && (result < 30)) {
    document.getElementById("demo1").innerHTML = "Тебе бы подсушиться слегка";
    document.getElementById("third").style.backgroundColor="#ffcc00";
  } if ((result >= 30) && (result < 35)) {
    document.getElementById("demo1").innerHTML = "Пора бы на пробежку";
    document.getElementById("fourth").style.backgroundColor="Orange";
  } if ((result >= 35) && (result < 40)) {
    document.getElementById("demo1").innerHTML = "В зал сходить не помешает";
    document.getElementById("fifth").style.backgroundColor="#DB3D21";
  } if (result >= 40)  {
    document.getElementById("demo1").innerHTML = "Стул не продави!";
    document.getElementById("sixth").style.backgroundColor="Red";
  }
}

}

function rrclr(){
  document.getElementById('first').style.backgroundColor = '#101010';
  document.getElementById('second').style.backgroundColor = '#101010';
  document.getElementById('third').style.backgroundColor = '#101010';
  document.getElementById('fourth').style.backgroundColor = '#101010';
  document.getElementById('fifth').style.backgroundColor = '#101010';
  document.getElementById('sixth').style.backgroundColor = '#101010';
  document.getElementById("demo1").innerHTML = "";
}


function gay(){
  document.getElementById("first").style.backgroundColor="red";
  document.getElementById("second").style.backgroundColor="Orange";
  document.getElementById("third").style.backgroundColor="yellow";
  document.getElementById("fourth").style.backgroundColor="green";
  document.getElementById("fifth").style.backgroundColor="blue";
  document.getElementById("sixth").style.backgroundColor="purple";
  document.getElementById("demo1").innerHTML = "Эй, гей, нормальные цифры то напиши!";
  document.getElementById("demo").innerHTML = "Ля шутник";
}
