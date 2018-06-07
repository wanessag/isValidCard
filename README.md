Por meio de um prompt solicitar ao usuário que insira o número do cartão, caso o mesmo insira um campo vazio irá retornar a seguinte mensagem como alerta: 'Você precisa inserir uma sequência de 16 dígitos!', fazendo um loop infinito até que o mesmo insira o número do cartão.

O código possui 1(uma) função, chamada obrigatoriamente de 'isValidCard', e dentro dela criar uma variável para receber o valor da transformação de uma string em array revertida; para isso deve-se empregar o split('').reverse(). 

Criar uma variável para que possa receber a soma dos dígitos;

Fazer um loop nos números revertidos e converter cada elemento do array de string para número inteiro e, verificar se é par, caso seja deve-se multiplicar por 2, se o dobro do número for maior ou igual a dez subtrair 9, feito isso deve-se somar o total.

Validar se a soma total dividida por 10 reste 0, caso isso ocorra o cartão será valido; usar um alerta para 'CARTÃO VÁLIDO!', e um para 'CARTÃO INVÁLIDO!'.
