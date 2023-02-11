/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((data)=>{
      if(data.marks>50){
      console.log(data.id,data.name,data.age,data.marks);
      }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((data)=>{
    if(data.marks>50){
      console.log(data.id,data.name,data.age,data.marks);
      }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let array=arr.filter((data)=>{
    return data.marks>50;
  })
  console.log(array)
}

function concatenateArray() {
  //Write your code here, just console.log
  var student=[
  { id: 1, name: "Rahul", age: "23", marks: 77 },
  { id: 2, name: "Ravi", age: "22", marks: 79 },
  { id: 3, name: "Sayrish", age: "23", marks: 69 },
  ];
  let result=[];
  result=arr.concat(student);
  console.log(result);
}
