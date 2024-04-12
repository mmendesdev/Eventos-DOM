const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const btnSomar = document.getElementById('btnSomar');
const resultadoParagrafo = document.getElementById('resultado');

btnSomar.addEventListener('click', () => {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultadoParagrafo.textContent = 'Por favor, insira apenas números.';
        return;
    }

    const soma = num1 + num2;
    resultadoParagrafo.textContent = `A soma de ${num1} e ${num2} é ${soma}.`;
});
