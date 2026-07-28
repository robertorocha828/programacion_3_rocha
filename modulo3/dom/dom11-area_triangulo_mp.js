const base = document.getElementById(campo_nuemro1);
const altura = document.getElementById(campo_nuemro2);
const btnCalcular = document.getElementById('btn_sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', () => {
    const baseNumerico = parseFloat(base.value);
    const alturaNumerico = parseFloat(altura.value);
    const area = baseNumerico*alturaNumerico/2;
    resultado.textContent = `Resulatdo: ${area}`;
    
})

