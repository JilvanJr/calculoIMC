function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').textContent = 'Por favor preencher Peso e Altura';
        return;
    }

    const imc = peso / (altura * altura);

    let resultado = '';
    if (imc < 18.5) {
        resultado = 'Magreza';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Normal';
    } else if (imc >= 24.9 && imc < 30) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }

    document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(2)} - Classificação: ${resultado}`;
}