// Practise 1


// let clickCounter = 0;

// const createElement = ()=> {
//     const divElement = document.createElement('div')    
//     divElement.textContent += clickCounter
//     if (clickCounter % 5 == 0) {
//         divElement.classList.add('circle')
//     }
//     else {
//         divElement.classList.add('square')
//     }
//     document.querySelector('div').appendChild(divElement)
    
//     clickCounter++
// }
// document.querySelector("#button1").addEventListener('click', createElement);


// // Practise 2

// const button2 = document.querySelector("#button2");
// const ulElement = document.querySelector('ul')

// let oddNumber = 1

// button2.addEventListener("click", function() {
//     const liElement = document.createElement("li")    
//     liElement.textContent = oddNumber;
    
//     if ( oddNumber % 3 === 0) {
//         liElement.classList.add("font-lg")
//     }
//     oddNumber += 2
        
//     ulElement.appendChild(liElement);
// });


// Practise 3 

let size = 0;
let grow = false
document.body.style.height = '10000vh' ;

const div = document.createElement('div');
document.body.appendChild(div);
div.style.width = '100%'
div.style.position = 'fixed';
div.style.top = '0';
div.style.left = '0';
div.style.backgroundColor = 'green';
div.style.height = size + 'px';


const changeHeight = () => {
    
    if (size > window.innerHeight / 2){
        grow = !grow
        div.style.backgroundColor = 'red'
    }
    else if ( size <= 0) {
        grow = !grow;
        div.style.backgroundColor = 'green';
    }
    
    if (grow) { 
        
        size += 20
    }
    else {
        
        size -=20
    }
    div.style.height = size + 'px';
}
    
window.addEventListener('scroll', changeHeight);

//  if (size > window.innerHeight / 2) {
//                 //    growRect = false;
//                 growRect = !growRect;
//                 div.style.backgroundColor = "red";
//             } else if (size <= 0) {
//                 // growRect = true;
//                 growRect = !growRect;
//                 div.style.backgroundColor = "green";

//             }

//             if (growRect) {
//                 size += 10;
//             } else {
//                 size -= 10;
//             }
//             div.style.height = size + "px";