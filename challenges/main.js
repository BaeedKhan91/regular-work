
//chapter 3 challenge 2

// const userName = prompt('what is your name')
// const user=userName.length

// alert ('your name contain'+" "+user+" "+'letters')



//incomplete


// let uName = 'baeed'
// let rev = uName.split().reverse()
// console.log(rev);

//chapter 4 challenge 1

// const age =prompt('how old are you')

// alert(`In 25 years you will be ${Number(age)+25}!`);

//chapter 4 challenge 2

// const first=prompt('first digits')
// const second=prompt('secnd  digits')
// alert(`multiplication of those two digits is ${Number(first*second)}`)

//chapter 4 challenge 3

// const bill =prompt('how much price of bill')
// const persons = prompt('how many people have to pay for it')

// const divide =Number(bill,persons)
// console.log( typeof divide);
// const pay = bill/persons
// alert(`${persons} person have to pay ${pay} each!`)

// let shoppingList= []

// console.log(shoppingList);

// shoppingList.push['snacks']
// console.log(shoppingList);

let multiply1 = Number(Math.ceil(Math.random() * 10))
let multiply2 = Number(Math.ceil(Math.random() * 10))
alert(`multiply ${multiply1} by ${multiply2}`);
let answer = prompt('give your answer')
let checking = multiply1 * multiply2
if (checking == answer) {
    alert(`correct answer ${multiply1} * ${multiply2} = ${checking}`)
}
else {
    alert(`wrong answer ${multiply1} * ${multiply2} = ${checking}`)
}
