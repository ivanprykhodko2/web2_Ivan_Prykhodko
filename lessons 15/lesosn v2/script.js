
let a = prompt("vvedi stroky");
/*
let a2 = a.repeat(3);
let aSp = a.split("");
let html = document.getElementById("str");
html.innerHTML = `
${aSp}
${aSp.length}`
*/
/*
let a1 = a.slice(0, 1);
let a2 = a.slice(a.length/2, a.length/2 +1);
let a3 = a.slice(a.length-1, a.length);
let html = document.getElementById("str");
html.innerHTML = `
${a1}<br>
${a2}<br>
${a3}`
*/
/*
let a2 = a.split("");
let html = document.getElementById("str");
if(a2.length > 5){
    let a3 = a.slice(0, 3);
    let a4 = a.slice(a.length-3, a.length);
html.innerHTML = `
${a3}
${a4}`
}else {
    let a5 = a.charAt(0);
    html.innerHTML = a5.repeat(a2.length);
}
*/
/*
let a1  = a.split("");
let a2 = "";
console.log(a1);
for(let i = 0; i<a1.length;i++){
    if(i%2 == 0){
        a2 += Math.round(Math.random()*20) + a1[i]
    }
}
let b = document.getElementById("str");
b.innerHTML = a2;
*/

let a1 = a.split("");
for(let i = 0; i<a1.length; i++){
    if(a1[i]==a1[a1.length-1]){
        let b = document.getElementById("str");
        b.innerHTML += i+" ";
    }
}


