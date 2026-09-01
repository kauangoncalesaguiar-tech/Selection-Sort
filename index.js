//Selection Sort

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
