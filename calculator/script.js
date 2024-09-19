
const button=document.getElementById('btn').addEventListener("click",function(){

    const inputElement1 = document.getElementById('input-1').value;
    const inputElement2 = document.getElementById('input-2').value;
    const storedValue1 = parseFloat(inputElement1);
    const storedValue2 = parseFloat(inputElement2);

   const select= document.getElementById('select')
   const selectValue =select.value;
   if(selectValue== '+'){
   const ans= storedValue1+storedValue2
   document.getElementById('output').textContent = ans

   }
   else if (selectValue=='-'){
    const ans=storedValue1-storedValue2
    document.getElementById('output').textContent = ans

   } 
   else if (selectValue=='*'){
    const ans=storedValue1*storedValue2
    document.getElementById('output').textContent = ans

   }
   else if(selectValue=='/'){
    const ans=storedValue1/ storedValue2
    document.getElementById('output').textContent = ans

   }
//    else if(storedValue1==''){
//     document.getElementById('output').textContent = "Invalid input"
//    }


else{
    document.getElementById('output').textContent = "InValid Input"
}


    

})

const AC=document.getElementById('ac-btn').addEventListener('click',function(){
    document.getElementById('input-1').value = '';
    document.getElementById('input-2').value = '';
    document.getElementById('output').textContent = '';
    
})
