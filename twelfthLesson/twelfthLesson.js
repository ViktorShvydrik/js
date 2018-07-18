const middleAgeBySex = (infoArray, sex) => {
  let sum = 0;
  let i = 0;
 infoArray.forEach(function(person){
   if(person.sex == sex){
     i++;
     sum += person.age;
   }
 });
  return sum/i;
}


const infoAboutPersons = [{
			name: `Ivan`,
			sex: `M`,
			age: 21
		},
		{
			name: `Olga`,
			sex: `W`,
			age: 19
			},
		{
			name: `Oleg`,
			sex: `M`,
			age: 27
		},
		{
			name: `Ann`,
			sex: `W`,
			age: 21
		},
		{
			name: `Alex`,
			sex: `M`,
			age: 30
		},
];

//console.log(middleAgeBySex(infoAboutPersons, `M`));
//console.log(middleAgeBySex(infoAboutPersons, `W`));