function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function count(str,l){
  var pos = -1;
  var sum = 0;
while ((pos = str.indexOf(l, ++pos)) != -1) {
  sum++;
}
  return sum;
}

//console.log(count(`we are future developers`,`e`));


function powX(x,n){
  if(isNumeric(x)&& isNumeric(n)){
    x=Math.round(x);
    n=Math.round(n);
   return Math.pow(x,n);
  }else{
    alert("Введены не числа")
  }
}

//console.log(powX(2.5,3.3));

function checkingComb(str, comb){
  str=str.toLowerCase();
  comb=comb.toLowerCase();
  return (str.indexOf(comb) != -1);
    

}

//console.log(checkingComb(`my naMe is Alex`,`name`));
//console.log(checkingComb(`my sUrNaMe is Ivanov`,`SURNAME`));
//console.log(checkingComb(`my sUrNaMe is Ivanov`,`SIRNAMES`));