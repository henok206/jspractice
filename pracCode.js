//set Differences
let a=[1,2,3,4,5];
let b=[3,4,5,6];
let A=new Set(a);
let B=new Set(b);
let c=a.filter(num=>!B.has(num));
//console.log("welcome javascript code");