let numberOne = +prompt('veuillez entrer un chiffre a virgule');
let numberTwo = +prompt('entrez maintenant un deuxieme chiffre a virgule');

if (numberOne === parseInt(numberOne) && numberTwo === parseInt(numberTwo)) {
    alert('recommencez');
}

else {
    let result = parseInt(numberOne )+ parseInt(numberTwo);
    alert(result);
}