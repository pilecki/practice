// Practise 1


let clickCounter = 0;

const createElement = ()=> {
    const divElement = document.createElement('div')    
    divElement.textContent += clickCounter
    if (clickCounter % 5 == 0) {
        divElement.classList.add('circle')
    }
    else {
        divElement.classList.add('square')
    }
    document.querySelector('div').appendChild(divElement)
    
    clickCounter++
}
document.querySelector("#button1").addEventListener('click', createElement);


// Practise 2

const button2 = document.querySelector("#button2");
const ulElement = document.querySelector('ul')

let oddNumber = 1

button2.addEventListener("click", function() {
    const liElement = document.createElement("li")    
    liElement.textContent = oddNumber;
    
    if ( oddNumber % 3 === 0) {
        liElement.classList.add("font-lg")
    }
    oddNumber += 2
        
    ulElement.appendChild(liElement);
});
