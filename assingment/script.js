
const userAge = Number(prompt('Enter Your Age'))
console.log(userAge);

if (userAge == "" || userAge < 1 || userAge > 100) {
    alert('Invalid age. Please enter a valid age.');
}
else if (userAge < 18 ) {
    alert("Hello, young one! You're still underage.")
}
else if (userAge <= 30 && userAge >= 18) {
    alert("Hey there! You're in the prime of your life!")
}
else if(userAge>30){
    alert("Hello, wise one! You have experienced a lot in life.")
}
else{
    alert("Please, Enter Your Age ")
}