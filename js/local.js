var students = [{"firstName":"Max","surName":"Sokolskyi","age":18,"sex":"М","isVegetarian":false,"langCount":3},
{"firstName":"Iryna","surName":"Petrushkina","age":30,"sex":"Ж","isVegetarian":false,"langCount":3},
{"firstName":"Roma","surName":"Slisarenko","age":22,"sex":"М","isVegetarian":false,"langCount":3},
{"firstName":"Yaroslav","surName":"Kovalev","age":18,"sex":"М","isVegetarian":false,"langCount":3},
{"firstName":"Tymur","surName":"Zhukotynskyi","age":19,"sex":"М","isVegetarian":true,"langCount":3},
{"firstName":"Boris","surName":"Kolomoiets","age":19,"sex":"М","isVegetarian":false,"langCount":3},
{"firstName":"Artur","surName":"Lavrinovich","age":19,"sex":"М","isVegetarian":false,"langCount":3}];

localStorage.setItem('students', JSON.stringify(students));
students = [];
students = JSON.parse(localStorage.getItem('students'));


/* --------------- Средний возраст студентов в группе ------------- */
var ageAVG = 0;
var countAgeAVG = 0;

students.forEach(function(student){
	ageAVG+=student['age'];
	countAgeAVG++;
});

var resultAVG = ageAVG/countAgeAVG;

console.log('Средний возраст студентов в группе: '+resultAVG.toFixed(1));

/* ---------------- Максимальное количество языков у студентов в группе  ----------- */
var maxLang = -1;

students.forEach(function(student){
	if(student['langCount'] > maxLang) maxLang = student['langCount'];
})

console.log('Максимальное количество языков у студентов в группе: ' + maxLang);

/* --------------- Количество девушек и парней ---------------- */
var guys = 0;
var girls = 0;

students.forEach(function(student){
	if(student['sex'] === 'М') guys++;
	else girls++;
})

console.log('Количество парней: ' + guys + ', девушек: ' + girls);

/* ---------------- Работа с текстовым полем --------------- */
function getPhrase(){
	var text = phraseText.value.trim();
	var clearText = text.length;
	while(clearText>0){
		text = text.replace(/[,:?]/, "");
		clearText -= text.length;
		console.log(clearText);
	}
	return text;
}

function AVGSizeWord(){
	var phrase = getPhrase();
	var words = phrase.split(" ");
	var wordsSize = 0;
	let count = 0;
	console.log(words);
	words.forEach(function(word){
		if(word.length === 0) {var k;}
		else{wordsSize += word.length;
		count++;}
	});
	var resultAVG = wordsSize/count;
	if(resultAVG>0)console.log('Средняя длина слова в строке: '+resultAVG.toFixed(3));
	else console.log('Строка пуста!');
}