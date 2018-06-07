do {
  var cardNumber = prompt('Insira o número do seu cartão de crédito:');
  if (cardNumber === '') alert('Você precisa inserir uma sequência de 16 dígitos!');
} while (cardNumber === '');

function isValidCard(cardNumber) {
  var number = cardNumber.split('').reverse();
  var cardSum = 0;
  for (i = 0; i < number.length; i++) {
    number[i] = parseInt(number[i]);
    if(i % 2 === 1){
    number[i] *= 2;
    if (number[i] >= 10) number[i] -= 9;
    }
    cardSum += number[i];
  }

  if (cardSum % 10 === 0) {
    return alert('CARTÃO VÁLIDO!');
  } else {
    return alert('CARTÃO INVÁLIDO!');
  }
}

isValidCard(cardNumber);
