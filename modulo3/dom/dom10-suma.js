const campoNuemro1 = document.getElementById(campo_nuemro1);
const campoNuemro2 = document.getElementById(campo_nuemro2);
const btnSumar = document.getElementById('btn_sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', () => {
    const nuemro1 = parseFloat(campo_nuemro1.value);
    const nuemro2 = parseFloat(campo_nuemro2.value);
    const suma = nuemro1+nuemro2;
    
})

