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
    const containerMensagemErro = document.querySelector('.error-menssage');
    const containerMensagemSucesso = document.querySelector('.success-menssage');
    
    formEValido = validaNumero(numeroB.value, numeroA.value)
    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroB.value = '';
        numeroA.value = '';

        containerMensagemErro.style.display = 'none';

    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        
        numeroB.value = '';
        numeroA.value = '';
        containerMensagemSucesso.style.display = 'none';
    }


})






console.log(form);






























