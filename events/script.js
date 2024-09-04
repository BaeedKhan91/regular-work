function changecolur(){
    let arr=[
        "white",
        "green",
        "blue",
        "purple",
        "pink",
        "grey",
        "black",
        "brown",
        "aqua",
        "orange",
        "red",
        "bluevoilet",
        "indigo"
 ];
 let pick= Math.floor(Math.random()*arr.length);
 let bg=arr[pick];
 document.body.style.background=bg
 document.getElementById("bg-test").innerText=bg


}
document.getElementById('bt').addEventListener('click',changecolur)
changecolur()


function condition(){
    let main=document.getElementById("main")
    if(main.style.background=="black"){
        main.style.background="white"
        }
        else(
            main.style.background="black"
        )
}
// document.getElementById("main").addEventListener('changeBackgroundColor', condition)
document.body.addEventListener('change',condition)
condition();


// function updateDivBackgroundColor() {
//     const body = document.body.backgroundColor;
//     const mainDiv = document.getElementById('main');

//     // Get the computed background color of the body
//     // const bodyBgColor = window.getComputedStyle(body).backgroundColor;

//     // Set the main div background color based on body background color
//     if (body === 'black') { // 'rgb(0, 0, 0)' is black
//         mainDiv.style.backgroundColor = 'white';
//     } else {
//         mainDiv.style.backgroundColor = 'black';
//     }
// }

// // Run the function to update background color on page load
// updateDivBackgroundColor();

// // Optional: Listen for changes in body background color
// // For example, if you have a button or some method to change the body color
// document.body.addEventListener('changeBackgroundColor', updateDivBackgroundColor);