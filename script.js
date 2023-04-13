let display = document.getElementById("display");

function appendChar(char) {
  display.value += char;
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
