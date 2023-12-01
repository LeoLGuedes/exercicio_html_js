const form = document.getElementById('form');
const numeroB = document.getElementById('number-b');
const numeroA = document.getElementById('number-a');

function validaNumero(b, a) {
    const bMaior = b > a;
    return bMaior;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const mensagemSucesso = `Parabéns! Seu número B (<b>${numeroB.value}</b>) foi maior que o A (<b>${numeroA.value}</b>)
    (TAXA DE ACERTO DA QUESTÃO: 0,2%)`

    const mensagemErro = `Tente novamente! Seu número B (<b>${numeroB.value}</b>) é menor que seu número A (<b>${numeroA.value}</b>) `
    
    formEValido = validaNumero(numeroB.value, numeroA.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-menssage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroB.value = '';
        numeroA.value = '';

        document.getElementById('.error-menssage').innerHTML('hidden');

    } else {
        const containerMensagemErro = document.querySelector('.error-menssage');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        
        numeroB.value = '';
        numeroA.value = '';
    }
})






console.log(form);






























