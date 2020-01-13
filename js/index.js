var years = [];

for(i = 1990, k = 0; i <= 2020; i++, k++){
	years[k] = i;
}

for(i = 0; i < years.length; i++){
	document.write(years[i]+'<br />');
}

/* -------- filter -------- */

document.write('<hr>');

var years21 = years.filter(function(year, yearIndex){
	return year >= 2000;
});

for(i = 0; i < years21.length; i++){
	document.write(years21[i]+'<br />');
}

/* ---------- join ----------- */

var yearsStr = years21.join(">>");

document.write('<hr>' + yearsStr + '<hr>');

/* ----------- indexOf ----------- */


var indexYear = yearsStr.indexOf("000>");
var indexYear1 = yearsStr.indexOf(">2003");
var minage = indexYear+indexYear1;
document.write(indexYear+' '+indexYear1+' minage'+minage);

/* ------------ User object ------------- */


function beerChips(){
	alert(this.age);
	return (this.age>18&&!this.isVegeterian);
}


var user = {
	'firstName': 'Tymur',
	'lastName': 'Zhukotynskyi',
	'age': 19,
	'sex': 'M',
	'isVegeterian': false,
	'langCount': 3, 
	'isCanDrinkBeerWithChips': beerChips
}



document.write(user.isCanDrinkBeerWithChips());

/*var harmfulFood = (user.age>18&&!user.isVegeterian) ? 'yes' : 'no';
function harmful (age, isVegeterian) {
	return (age>18&&!isVegeterian) ? 'yes' : 'no';
}
document.write('<hr>Пивос с чипсами можно мне? ' + harmful(user.age, user.isVegeterian));*/

function checkEvent(){
	alert('Проверка');
}

function addEvent(){
	check.addEventListener("click", checkEvent);
	alert('Добавлен');
}

function removeEvent(){
	check.removeEventListener("click", checkEvent);
	alert("Удален");
}

function getAge(){
	return age.value;
}

function checkHarmful(){
	user.age = getAge();
	alert(user.age);
	return user.isCanDrinkBeerWithChips();
}

function onSubmit(){
	result.textContent = getAge();
	if(checkHarmful()) result.textContent += 'Можно нахецатысь с чипсами';
	else result.textContent += 'Нельзя пить и есть';
}


var name = localStorage.getItem('name');
alert(name);


const str = JSON.stringify([1,2,3]);
const arr = JSON.parse(str);

console.log(str);
console.log(arr);
