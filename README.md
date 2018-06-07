Coletar o número do cartão {
  * Pedir ao usuário o número do cartão
  * Se não houver input do usuário --> alertar o usuário para que ele insira uma sequência de 16 dígitos
} enquanto a mensagem for vazia, voltar ao início

Validar cartão {
  * Quebrar a string inserida em um array e inverter a ordem
  * Inicializar com 0 a soma dos números
  * Avaliar cada dígito da sequência {
    * Converter o dígito de string para integer
    * Se a posição do número for par {
    * Multiplicar o número por 2
    * Se o número multiplicado por 2 for maior ou igual a 10 --> subtrair 9
    }
  * Adicionar o número na posição atual à soma
  }
  * Se a soma for divisível por 10 {
    * Mostrar ao usuário que o cartão é válido
  } * Caso contrário {
    * Mostrar ao usuário que o cartão é inválido
  }
}
