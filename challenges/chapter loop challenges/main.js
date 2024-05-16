//challenge no 1
// for (let i=1; i<101;i++){
//      if(i%3==0 && i%5==0){
//         console.log('fizzbuzz');
//     }
//     else if(i%3==0){
//         console.log('fizz');
//     }
//     else if(i%5==0){
//         console.log('buzz');
//     }

//     else{
//         console.log(i);
//     }
// }

//challenge no 2

let number = Math.ceil(Math.random()*10);
let correctAns = 0;
let wrongAns=false
while(!wrongAns){
const userSaysHigher = confirm(`The number is ${number}. Do you think the next number will be higher?`);

const nextNumber = Math.ceil(Math.random()*10);

if(nextNumber > number && userSaysHigher || nextNumber <= number && !userSaysHigher){
  alert(`Correct! It was ${nextNumber}.`);
  correctAns ++; 
} else {
  alert(`Wrong! It was ${nextNumber}`);
  wrongAns = true
}
}
alert(` no of right answer ${correctAns} `)