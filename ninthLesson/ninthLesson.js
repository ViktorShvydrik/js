function mid(a,b){
  return (a+b)/2;
}


function pow(x,n){
  var otv=x;
  if(n>0){
    for(var i=1; i<n; i++){
    otv*=x;
  }
  }
  if(n==0){
    otv= 1;
  }
  if (n<0){
    for(var i=n; i<0; i++){
      otv/=x;
    }
  }
  return otv;
}

const  questionFunc = () => {
	let a = +prompt('a?', '');
  switch (a){
    case 0: alert( 0 ); break;
    case 1: alert( 1 ); break;
    case 2: 
    case 3: alert( '2,3' ); break;
  }

	}


function loopWhile (a,b){
  while(a<=b){
    if(a%2==1){
      console.log(a)
    }
    a++;
  }
}

function loopDoWhile (a,b){
  do{
    if(a%2==1){
      console.log(a)
    }
    a++;
  }while(a<=b)
  
}

function loopFor (a,b){
  for(a; a<=b; a++){
    if(a%2==1){
      console.log(a)
    }
  }
}

//console.log(mid(5,15));
//console.log(pow(6,-5))
//questionFunc();
//loopWhile(2,10) 
//loopDoWhile(2,10)  
//loopFor(2,10)