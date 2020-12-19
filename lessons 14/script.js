
let str = "text";
let str1 = 'text';
let str3 = `text
${str}
${1}
${false}
fsf`;
let str2 = str+str1;

let container = document.getElementById("container");
container.innerHTML = str + "<br>";
container.innerHTML += str1 + "<br>";
container.innerHTML += str3;
//alert(str3);
for(let i =0; i<str3.length;i++){
    console.log(str3[i])
}
console.log(str3.charAt(str3.length-1));
let str4 = "1141_21114_32234";
let arr = str4.split("_");
console.log(arr);

let arr2 = str4.split("");
console.log(arr);
console.log(str4.indexOf("_")); // если такого нет то выдаёт -1
let str5 = str4.slice(0, str4.length-4);
console.log(str5);

let str6 = str4.substring(4, str4.length);
console.log(str6);

let str7 = str4.substring(str4.length, 4);
console.log(str7);

let str8 = str4.substr(5, 4);
console.log(str8)


//задание 1
let s1 = "abcd"
let s2 = "";
let s3 = "";
for(let i = 0; i<s1.length; i++){
    for(let b = 0; b<i; b++){
        console.log(s1[i]);
        s2 += s1[i]

    }
}
console.log(s2)


for(let i = 0; i<s1.length; i++){
        console.log(s1[i]);
        s3 += s1[i].repeat(i);
}
console.log(s3)


//задание 2
let  d = "05-12-2020"
let d2 = d.split("-")
console.log(d2);
let d3 = [];
for(let i =0; i<d2.length;i++){
    d3[i]= parseInt(d2[i]);
}
console.log(d3);


let k = "robocodebr@gmail.com";
let k2 = k.split("@");
console.log(k2);
let k3 = k2[1].split(".");
console.log(k3);
let k4 = [k2[0], k3[0], k3[1]];
console.log(k4);


let b0 = `JavaScript  — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript (стандарт ECMA-262[7]).

JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам[8].

Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса.

На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java. Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования, используемых в веб-разработке[~ 1][9].

Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США[10].`

let b1 = b0.split(".")
console.log(b1.length-1);
container.innerHTML += `<br> \u{1F621}`
container.innerHTML += `<br> \u{1F632}`
container.innerHTML += `<br> \u{1F638}`
container.innerHTML += `<br> \u{1F666}`

let kk = ["\u{1F631}", "\u{1F632}", "\u{1F633}", "\u{1F634}", "\u{1F635}"]
console.log(kk);

for( let i = 0; i<b1.length-1; i++){
    container.innerHTML += b1[i] + ` \u{1F631} . `
}