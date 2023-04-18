
const form = document.getElementById("form");

form.addEventListener('submit', function (event) {
    // impedindo o carregamento do form
    event.preventDefault();

    const weigth = document.getElementById('weigth').value;
    const heigth = document.getElementById('heigth').value;
    // toFixed() para aparecer apenas 2 casas depois da virgula
    const imc = (weigth / (heigth * heigth)).toFixed(2);

    const value = document.getElementById('value');
    let decription = '';
    
    value.classList.add('attention');

    document.querySelector('.infos').classList.remove('hidden')

    if (imc < 18.5) {
        decription = 'Cuidado você está abaixo do peso!'
    } else if (imc > 18.5 && imc <= 25) {
        decription = 'Você está no peso ideal!'
        value.classList.remove('attention');
        value.classList.add('normal');
        
    } else if (imc > 25 && imc <= 30) {
        decription = 'Cuidado você está com sobrecarga!'
    } else if (imc > 30 && imc <= 35) {
        decription = 'Cuidado você está com obesidade moderada!'
    } else if (imc > 35 && imc <= 40) {
        decription = 'Cuidado você está com obesidade severa!'
    } else {
        decription = 'Cuidado você está com obesidade morbita!'
    }

    value.textContent = imc.replace('.', ',')
    document.getElementById('decription').textContent = decription
});