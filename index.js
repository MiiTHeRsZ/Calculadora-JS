const visor = document.querySelector('#valores')
const teclado = document.querySelector('.teclado')

teclado.addEventListener('click', (e) => {
    //var tecla = document.querySelector('.botoes:active').value

    //while (tecla != "=") {
    //  do {
    var number = document.querySelector('.botoes').value
    //} while (tecla != "*")
    //}

    console.log(number)



    /* if (e.taget.matches('button')) {
         const key = e.target
         const acao = key.dataset.action
 
         if (!acao) {
             console.log('números')
         }
         if (acao == 'somar' || acao == 'subtrair' || acao == 'multiplicar' || acao == 'dividir') {
             console.log('operadores')
         }
         if (acao == 'limpar') {
             console.log('limpar')
         }
         if (acao == 'decimal') {
             console.log('decimal')
         }
         if (acao == 'enter') {
             console.log('enter')
         }
     }*/
})

function inserir(num) {
    var numero = document.getElementById('valores').innerHTML

}