let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (currentInput !== '' && !isOperator(currentInput.slice(-1))) {
    currentInput += operator;
    display.textContent = currentInput;
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
}
