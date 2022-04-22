//set Differences means
// what is the number in set a not find in set b
// let a=[1,2,3,4,5];
// let b=[3,4,5,6];
// let A=new Set(a);
// let B=new Set(b);
// let c=a.filter(num=>!B.has(num));
//console.log("welcome javascript code");
//alert(c);
//document.write(c);
// window.alert(c);

//map
// let number=[1,2,3,-2,4];
// let filterResult=number.filter(n=>n>=0);
// //document.write(filterResult);//output 1,2,3,4
// let items=filterResult.map(n=> '<li>'+n+'</li>');
// document.write(items);
//console.log(items);output <li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>

//adding value to the map
// let countryMap=new Map();
// document.write(countryMap.size);//0
// countryMap.set("ethiopia","addisAbaba");
// countryMap.set("keniya","Nairobi");
// document.write(countryMap);
// //console.log(countryMap);
// traditional way of filtering
// const mixNumber=[12,34,56,66,22,42,3,51,34];
// let evenArr=[];
// for(let i=0; i<mixNumber.length; i++){
//     if(mixNumber[i]%2==0){
//         evenArr.push(mixNumber[i]);
//     }
// }
// //console.log(evenArr);
// document.write(evenArr);//output 12,34,56,66,22,42,34

//now by using filter method we filter out even number
// const mix=[12,34,56,66,22,42,3,51,34];
// const evenA=mix.filter(function(mix){
//    if(mix%2==0){
//        return true;
//    }
// });
// document.write(evenA);
// with out using function instead parameter
// const mix=[12,34,56,66,22,42,3,51,34];
// const evenA=mix.filter(mix=>mix%2==0);
// document.write(evenA);
// const companies=[
//     {name:"company pepsi",category:"softdrink",startt:1934,end:2022},
//     {name:"company volvo",category:"car",startt:1801,end:1994},
//     {name:"company walia",category:"beer",startt:1934,end:2020},
//     {name:"company muger",category:"ciment",start:1964,end:2019},
//     {name:"company tracon",category:"Almunihm",start:1804,end:1978},
//     {name:"company habesha",category:"cement",start:1932,end:1922},
//     {name:"company bedelie",category:"beer",start:1864,end:2022},
//     {name:"company yes",category:"water",start:1954,end:2021}
    
// ];
//for each loop
// companies.forEach(function(company){
//  document.write(company.name+" ---->"+company.category+"<br>");
 
// });
 //filtering by using callback function
//  const companiesbeer=companies.filter(function(compny){
//      if(compny.category==="beer"){
//          return true;
//      }
//  });
//  //document.write(companiesbeer);
//  window.alert(companiesbeer);
 //console.log(companiesbeer);
 //filternig by using parameter
//  const companiesbeer=companies.filter(company=>company.category=="beer");
//   document.write(companiesbeer);
        
// const eightinCom=companies.filter(company=>(company.start >=1800&&company.start<=1934));
// //console.log(eightinCom);
// document.write(eightinCom);
  //map using call back function
 //const num=[2,4,5,6];
//  const doublenum=num.map(function(x){
//       return x*2;
//   });
  //console.log(doublenum);
  //document.write(doublenum);//output 4,8,10,12
  //using arrow function
//    num=[2,4,5,6]
//  doublenum= num.map(x=>x*2);
//   //console.log(doublenum);
//   document.write(doublenum);//2,4,10,12
 // finding squre root by using map arrow function
//   const orginalArr=[1,9,25,49];
//   const root=orginalArr.map(x=>Math.sqrt(x));
//   document.write(root);//expected output 1,3,5,7
//key value pare array formated object
// const kvArr=[
//     {key:1,value:10},
//     {key:2,value:20},
//     {key:3,value:30}
// ];
// const formatedKvArr=kvArr.map(({key,value})=>({[key]:value}));

//document.write(formatedKvArr);
// console.log(formatedKvArr);//expected output{1,10},{2,20},{3,30}