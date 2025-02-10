const display = document.getElementById('display');

// Function to append input to the display
function appendToDisplay(input) {
  display.value += input;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'ERROR';
  }
}

// Function to handle backspace
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