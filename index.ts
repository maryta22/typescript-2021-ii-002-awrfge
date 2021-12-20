// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Calculadora</h1>`;

document.getElementById('sumar').addEventListener('click', () => {
  /*
    Cambia el tipo unknown por HTMLInputElement
  */

  let elemento1: HTMLInputElement = document.getElementById(
    'numero1'
  ) as HTMLInputElement;
  let elemento2: HTMLInputElement = document.getElementById(
    'numero2'
  ) as HTMLInputElement;

  /*
    Cambia el tipo unknown por number.
    Utiliza la función parseInt para convertir a número cada valor de elemento1 y elemento2.
   */

  let numero1: number = parseInt(elemento1.value);

  let numero2: number = parseInt(elemento2.value);

  let resultado = numero1 + numero2;

  document.getElementById('resultado').innerText =
    'El resultado de la suma es: ' + resultado.toString();
});
