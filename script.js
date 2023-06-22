let expressao = '';

function adicionarNumero(numero){
   expressao += numero;
   atualizarDisplay()
}

function adicionarOperador(operador){
   expressao += operador;
   atualizarDisplay();
}

function calcular(){
   try{
      const resultado = eval(expressao);
      expressao = resultado;
      atualizarDisplay();
   } catch(e){
      expressao = '';
      atualizarDisplay(e);
   }
}

function limpar(){
   expressao = ''
   atualizarDisplay();
}

function atualizarDisplay(valor = ''){
   const display = document.querySelector('#display');
   display.value = valor !== "" ? valor : expressao;
}