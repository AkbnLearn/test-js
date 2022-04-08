//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)


const a = 7;
const b = 5; 
if (a < b) console.log('b yra didesnis skaicius',b);
    else if (a > b) console.log('a yra didesnis skaicius',a);
    else if (a === b) console.log('skaiciai yra lygus');

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

console.log('--------------------------');

for (let i = 1; i <= 10; i++) {
    console.log(i);
    }

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

console.log('--------------------------');

for(let i = 0; i <= 10; i += 2) {
   console.log(i);
}
    
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

console.log('--------------------------');

function rand (min, max) {
    return Math.floor(Math.random () * (max - min + 1) + min);  
}

for(let i = 0; i < 5; i++){
    console.log(rand(1, 10))
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

console.log('--------------------------');
const paskutinis = 5;
let randomNumber = rand(1, 10);
while (randomNumber !== paskutinis) {
    console.log(randomNumber);
    randomNumber = rand(1, 10);
}

console.log(randomNumber);

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

console.log('--------------------------');


//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

console.log('--------------------------');



/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/

console.log('--------------------------');



/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/

console.log('--------------------------');



/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/

console.log('--------------------------');



