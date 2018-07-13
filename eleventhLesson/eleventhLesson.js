var cl = console.log;

function isInArray(arr, el){
   if(arr.indexOf(el) != -1){
     return true;
   }else {
     return false;
   }
 }

//cl(isInArray([1, 2, 3 , `4`, `hello`],`hello`));
//cl(isInArray([1, 2, 3 , `4`, `hello`], 4) );

function modifyArr(arr, el, newEl){
  var i = 0;
  var ch = false;
  while(true){
  if((i = arr.indexOf(el)) != -1){
    arr.splice(i,1,newEl);
    ch = true;
  }else{
    break;
  }
  }
  if(ch){
    return arr;
  }else{
    return `element ${el} not found in array [${arr}]`
  }
  
}

//cl(modifyArr([1,2,3,4,5], 3, `hello`));
//cl( modifyArr([1,2,3,4,5,3], 3, `hello`))
//cl(modifyArr([1,2,3,4,5], 6, `hello`)); 

function transformString(str, el, newEl){
  var i=0;
  if((i=str.toLowerCase().indexOf(el.toLowerCase())) != -1){
    var arr = str.split('');
    arr.splice(i,el.length, newEl);
    str = arr.join("");
    return str;
  }else{
    return `element ${el} not found in string '${str}'`
  }
}

//cl(transformString(`my naMe is Alex`,`name`, `coolName`)); 
//cl(transformString(`my sUrNaMe is Ivanov`,`SURNAMES`, `name`));