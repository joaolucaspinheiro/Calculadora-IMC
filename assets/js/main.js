function main() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const peso = parseFloat(form.querySelector('.peso').value);
        const altura = parseFloat(form.querySelector('.altura').value);

        if (isNaN(peso) || isNaN(altura)) { // Criando uma validação para inserir apenas valores númericos
            setResultado('Por favor, coloque apenas valores númericos.', false);
            return;
        }
        const imc = calculaIMC(peso, altura);
        const categoriaIMC = categoryIMC(imc);

        const msg = `Você está com <b> ${categoriaIMC} </b> Pois seu IMC está em <b>${imc} </b>`;

        setResultado(msg, true);
    });
    function calculaIMC(peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    }
    function categoryIMC(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];

    }

    function setResultado(msg, isValid) {

        const resultado = document.querySelector('#resultado'); // # pois estou usando o ID
        resultado.innerHTML = '';
        const p = document.createElement('p');
        if(isValid){
            p.classList.add('paragrafo-resultado');

        }else{
            p.classList.add('bad');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
        


    }


}
main();