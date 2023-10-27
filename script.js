// question no 1:
let obj1={
    name:"Person1",
    age:5
    }
    let obj2={
        age:5,
        name:"Person1"
    }
     var result3=JSON.stringify(obj1);
     var result4=JSON.stringify(obj2);
    console.log(result3===result4);

// question no 2:

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){var data=request.response;
var result=JSON.parse(data)
for(i=0;i<result.length;i++)
{console.log(result[i].flags.png)}}
    
// question no 3:

var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function(){var data1=request1.response;
var result1=JSON.parse(data1)
for(i=0;i<result1.length;i++)
{console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population)}}

