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
 //adding value using map
  const couPiraCity=new Map();
 couPiraCity.set('Ethiopia','Addis');
 couPiraCity.set('keniya','Nayirobi');
 couPiraCity.set('Engiland','london');
 couPiraCity.set('sudan','kartum');
 
//  //console.log(couPiraCity);
//  console.log(couPiraCity.get('Ethiopia'));
//getting all value by using loop
//  for(const country of couPiraCity){
//    //console.log(country);
//    document.write(country)
//  }
  // for(const [country,city]of couPiraCity ){
  //   //console.log(country,city);
  //   document.write(country,city + "<br>");
  // }
  //spread operator
  //add elements in the exiting array in to a new array
  // let oddnum=[1,3,5,9];
  // let evenNum=[...oddnum,4,6,8,10];
  // document.write(evenNum);
//pass element of array as argument
// function addThreeNumber(x,y,z){
//   console.log(x+y+z);
// }
// let arrNum=[10,20,30];
// addThreeNumber(...arrNum);//passing array as argument by spread operator
// copy arry by using spread operator(...)
// let arr1=[1,2,3,4,5,6,7];
// let arr2=[...arr1];
// arr2.push(10);
//console.log(arr2);
//document.write(arr2);
//array conactinate using concat method
// arr1.concat(arr2);
//console.log(arr2);
// document.write(arr2);
//array conactinate using spread operator method
// arr1=[2,4,6,8];
// arr2=[1,3,5,7];
// arr1=[...arr1,"Henok",...arr2];
// document.write(arr1);
//spread operator tp copy object
// let user={
//     uname:'Henok',
//     title:'Developer',
//     country:'Ethiopia',
//     city:'Addiss'
// }
// let copedUser={...user};
// //document.write(copedUser);
// console.log(copedUser);
//Destracturing object
// let rectangle={
//   width:10,
//   height:20,
//   area:200
// }
// let {width,height,area}=rectangle;
// document.write(width,height,area);
//renaming the Destructer
// let{width:w,height:h,area:a,peremeter:p}=rectangle;
// document.write(w,h,a,p);
//calculate perimeter with out destructering
// //let calPerimeter=rectangle=>{
//   return 2*(rectangle.width+rectangle.height);
// }
//document.write(calPerimeter(rectangle));
//console.log(calPerimeter(rectangle));
//calculate parimeter with distructer
// const calPerimeter=({width,height})=>{
//   return 2*(width+height);
// }
// document.write(calPerimeter(rectangle));
//assign variable from array
// let [a,b,...rest]=[1,2,3,4,5,6];//...rest operator
//console.log(a);//1
//console.log(b);//2
// console.log(rest);//3,4,5,6
//Destracting array
// let fullStack=[
//   ['Html','css','js'],
//   ['express','Node','MongoDb']
// ];
// let[frontEnd,backend]=fullStack;
// document.write(frontEnd);
// document.write("<br>");
// document.write(backend);
//if you want to omit use comma
// let nameList=['Abebe','kebede','Tewdros','Bisirat'];
// let[,secondName,,fourthName]=nameList;
// document.write(secondName,fourthName);
//Destructering object iteration
// let toDoList=[
//   { task:"writeProposal",
//     time:'4/22/2022',
//     compleated:true
//   },
//   { task:"preparePowerPoint",
//   time:'4/20/2022',
//   compleated:true
// },
// { task:"presentProposal",
// time:'4/21/2022',
// compleated:false
// }
// ];
// for(const{task,time,compleated}of toDoList){
//   document.write(task,time,compleated+"<br>");
// 
//convert arry to object
// const students = [
//   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ];
// console.log(students);
// let conToObject=({},students);
// console.log(conToObject);
//Regular Expression
//creating pattern by using RegExpression constructor
//with out flag
// let pattern="Henok";
// let regExp=new RegExp(pattern);
// console.log(regExp);
//creating regular Expression with flag(global and case insensitive)
// let pattern="love";
// let flag='gi';
// let regExp=new RegExp(pattern,flag);
//creating apattern with outRegular Expression
// let regExp=/Henok/gi;
//regular expresion object method
//test()for mathch
// let str="i love ethiopia";
// let pattern=/love/
// let result=pattern.test(str);
// document.write(result);
//by using string method match()
// let str="I love to be here";
// let pattern=/love/gi;
// let result=str.match(pattern);
// document.write(result);
// console.log(result);
// by using string method search() it return index
// let str="I love to be here";
// let pattern=/love/gi;
// let result=str.search(pattern);
// document.write(result);//retun index 2
//console.log(result);
// replace asubstring
// let str="I love to be here,hope every one love too be here";
// let pattern=/love/gi;
// let result=str.replace(pattern, 'like');
// document.write(result);//I like to be here,hope every one like too be here
//console.log(result);

//console log object method
// console.log("Hello,world");//Hello,world
// console.log("%cHello world","color:green");//Hello world green color

//console.warn() for warning
//console.warn("Don't do it again");
//console error
// console.error("it has error");
//console table
// let names=['Abebe','Kebede','Aster','Mekides'];
// console.table(names);
// let userPro={
//   name:'Henok',
//   prpfessional:'Developer',
//   country:'Ethiopia',
//   city:'Addiss Ababa'
// };
// console.table(userPro);

//console.info
// console.info("Reserch methodology exam will be next week");

//console.assert
//console.assert(5>4, '5 is greater than 4');//no resut since true
//console.assert(5>6,"it is false");//assertation failed,it is false
 //console.count();
//  let fun=()=>{
//    console.count("function has been count");

//  }
//  fun();
//  fun();
//  fun();
//  fun();
//console.clear
// console.clear();