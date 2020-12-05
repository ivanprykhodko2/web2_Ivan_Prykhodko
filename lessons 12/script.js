let b = [1,2,3,4,5,6,6,7,8,9,10]
let a = 0;
let s = 1;
while(a<b.length){
    s *= b[a];
    a++;
}
console.log(s);