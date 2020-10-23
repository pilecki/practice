document.querySelector('h1').addEventListener('click', function(){ this.textContent += ' + '});

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


document.querySelector('button').addEventListener('click', createElement);