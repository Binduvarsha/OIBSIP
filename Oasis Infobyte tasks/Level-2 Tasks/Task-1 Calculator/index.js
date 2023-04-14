let result = document.getElementById('result');

function appendToResult(char) {
  result.value += char;
}

function calculate() {
  result.value = eval(result.value);
}

function clearResult() {
  result.value = '';
}
