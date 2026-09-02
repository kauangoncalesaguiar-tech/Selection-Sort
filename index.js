/* //Selection Sort

function selectionSort(arr) {
  let n = arr.length;

  // Percorre todo o array
  for (let i = 0; i < n - 1; i++) {
    // Assume que o menor elemento atual é o do índice i
    let menorIndice = i;

    // Procura o menor elemento no restante do array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[menorIndice]) {
        menorIndice = j; // Atualiza o índice do menor elemento encontrado
      }
    }

    // Se encontrou um elemento menor, faz a troca de posição
    if (menorIndice !== i) {
      let aux = arr[i];
      arr[i] = arr[menorIndice];
      arr[menorIndice] = aux;
    }
  }

  return arr;
}

// Exemplo de uso:
const numeros = [29, 10, 14, 37, 14];
console.log('Array original:', numeros);

const numerosOrdenados = selectionSort(numeros);
console.log('Array ordenado:', numerosOrdenados);




//1)
function ordenarTamanhos(arr) {
  // Validação de entrada
  if (!Array.isArray(arr) || arr.some(item => typeof item !== "string")) {
  }

  // Copiamos o array para não modificar o original
  let frutas = [...arr];
  let n = frutas.length;

  // Algoritmo Selection Sort adaptado
  for (let i = 0; i < n - 1; i++) {
      let indiceMenor = i;

      for (let j = i + 1; j < n; j++) {
          // Comparação pelo tamanho da string
          if (frutas[j].length < frutas[indiceMenor].length) {
              indiceMenor = j;
          }
      }

      // Troca de posições, se necessário
      if (indiceMenor !== i) {
          let temp = frutas[i];
          frutas[i] = frutas[indiceMenor];
          frutas[indiceMenor] = temp;
      }
  }

  return frutas;
}

// Exemplo de uso
const frutas = ["Banana", "Maçã", "Pera", "Uva"];
console.log("Original:", frutas);
console.log("Ordenado:", ordenarTamanhos(frutas));
 */

/* //2)
const numeros = [15, 8, 42, 4, 23]
let MenorValor = numeros[0]; 
let menorIndice = 0;


for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < MenorValor) {
    MenorValor = numeros[i];
     menorIndice = i;
  };
};
console.log ('Menor Valor:', MenorValor, 'Índice:', menorIndice);

//3)
function selectionSortDesc(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
      let indiceMaior = i;

      for (let j = i + 1; j < n; j++) {
          
          if (arr[j] > arr[indiceMaior]) {
              indiceMaior = j;
          }
      }

      //Troca de posições
      if (indiceMaior !== i) {
          let temp = arr[i];
          arr[i] = arr[indiceMaior];
          arr[indiceMaior] = temp;
      }
  }

  return arr;
}

const numeros = [3, 1, 9, 5, 2];
console.log(selectionSortDesc(numeros)); */


function selectionSortComContador(arr) {
  let n = arr.length;
  let trocas = 0; // Contador de trocas

  for (let i = 0; i < n - 1; i++) {
      let menorIndice = i;

      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[menorIndice]) {
              menorIndice = j;
          }
      }

      // Se encontrou um elemento menor, troca
      if (menorIndice !== i) {
          let temp = arr[i];
          arr[i] = arr[menorIndice];
          arr[menorIndice] = temp;
          trocas++; 
        }
  }

  console.log(`Foram feitas ${trocas} trocas.`);
  return arr;
}


const numeros = [4, 3, 2, 1];
console.log("Array ordenado:", selectionSortComContador(numeros));
