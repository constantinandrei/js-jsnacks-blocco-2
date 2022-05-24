/* 

Inserisci un numero, se è pari stampa il numero, 
se è dispari stampa il numero successivo.

*/

const myDiv = document.getElementById('my-div');
const myInput = document.getElementById('floatingInput');
const myButton = document.querySelector('#my-div .btn');
const documentOutput = document.querySelector('#my-div h4');

myButton.addEventListener('click', function () {
    if (myInput.value % 2 === 0) {
        documentOutput.innerHTML = myInput.value;
    } else {
        documentOutput.innerHTML = parseInt(myInput.value) + 1;
    }
})

