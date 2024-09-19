
const button=document.getElementById('btn').addEventListener("click",function(){

    const inputElement1 = document.getElementById('input-1').value;
    const inputElement2 = document.getElementById('input-2').value;
    let storedValue1 = parseFloat(inputElement1);
    let storedValue2 = parseFloat(inputElement2);

   const select= document.getElementById('select')
   const selectValue =select.value;
   if(selectValue== '+'){
   const ans= storedValue1+storedValue2
   document.getElementById('output').textContent = ans
    // inputElement1 = '';
    // inputElement2 = '';
   }
   else if (selectValue=='-'){
    const ans=storedValue1-storedValue2
    document.getElementById('output').textContent = ans
    // inputElement1 = '';
    // inputElement2 = '';
   } 
   else if (selectValue=='*'){
    const ans=storedValue1*storedValue2
    document.getElementById('output').textContent = ans
    // inputElement1 = '';
    // inputElement2 = '';
   }
   else if(selectValue=='/'){
    const ans=storedValue1/ storedValue2
    document.getElementById('output').textContent = ans
    // inputElement1 = '';
    // inputElement2 = '';
   }
//    else if (storedValue1===NaN){
//     document.getElementById('output').textContent = "Please Enter The Number"
// }
else{
    document.getElementById('output').textContent = "InValid Input"
}

inputElement1.value= '';
inputElement2.value = '';
    

})
