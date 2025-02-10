const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'ERROR';
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    backspace();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key >= '0' && event.key <= '9') {
    appendToDisplay(event.key);
  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    appendToDisplay(event.key);
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    clearDisplay();
  }
});