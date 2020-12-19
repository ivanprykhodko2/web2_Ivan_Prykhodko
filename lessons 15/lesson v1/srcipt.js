let a = "text";
let b = "text";
let s = `text
text
text
`;

let a2 = a+"aaaaaaa";
let s2 = `${s}cccccccccccc` 
let hmtl = document.getElementById("str1");
hmtl.innerHTML = `${a2} <br>
${s2}<br>
${s2[0]}<br>
${s2.charAt(0)}<br>
${s2.length}`;

for(let i =0; i<s2.length;i++){
    hmtl.innerHTML += `${s2[i]}<br>`
}

let int = parseInt("12");
let float = parseFloat("12.45");
hmtl.innerHTML += `int = ${int}<br>`
hmtl.innerHTML += `float = ${float}<br>`


let str = "aaaa bbbb cccc";
let sPstr = str.split(" ");
let wsPstr = str.split("");
hmtl.innerHTML += `str1 = ${sPstr}<br>`
hmtl.innerHTML += ` srt2 = ${wsPstr}<br>`
let str2 = sPstr.join("")
console.log(str2);
let bb = str.slice(4,8);
console.log(bb);

let aaa = str.substring(3, 0);
let ccc = str.substr(10, 3);
hmtl.innerHTML += `aaa = ${aaa}<br>`;
hmtl.innerHTML += `ccc = ${ccc}<br>`;

let repeat = aaa.repeat(5);
hmtl.innerHTML += `repeat ${repeat}<br>`;
let indexofA = repeat.indexOf("a");
let indexofAA = repeat.indexOf("bbb");
hmtl.innerHTML += `
idnex1 = ${indexofA}<br>
index2 = ${indexofAA}<br>`;







