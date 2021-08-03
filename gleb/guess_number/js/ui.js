function disable(el) {
  el.disabled = true;
}

function enable(el) {
  el.disabled = false;
}

function focus(el) {
  el.focus();
}

export function $(el) {
  return document.querySelector(el);
}

export function $$(el) {
  return document.querySelectorAll(el);
}

export function text(el, text) {
  el.textContent = text;
}

export function bgColor(el, color) {
  el.style.backgroundColor = color;
}

export function renderGuesses(guesses) {
  text($(".guesses"), guesses.join(", "));
}

export function renderSuccess(message) {
  var lastResult = $(".lastResult");
  var lowOrHi = $(".lowOrHi");

  bgColor(lastResult, "green");
  text(lastResult, message);
  text(lowOrHi, "");
}

export function renderError(
  userGuess,
  randomNumber,
  errorMessage,
  lowErroMessage,
  highErrorMessage
) {
  var lastResult = $(".lastResult");
  var lowOrHi = $(".lowOrHi");
  var lowHiText = userGuess < randomNumber ? lowErroMessage : highErrorMessage;

  text(lastResult, errorMessage);
  text(lowOrHi, lowHiText);
  bgColor(lastResult, "red");
}

export function renderGameOver(buttonLabel, callback) {
  disable($(".guessField"));
  disable($(".guessSubmit"));
  var resetButton = document.createElement("button");
  resetButton.className = "reset-button";
  text(resetButton, buttonLabel);
  resetButton.addEventListener("click", callback);
  document.body.appendChild(resetButton);
}

export function renderResetGame() {
  var resetParas = $$(".resultParas p");
  var resetButton = $(".reset-button");
  var lastResult = $(".lastResult");

  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  renderResetGuessField();
  enable($(".guessSubmit"));
  bgColor(lastResult, "white");
}

export function renderResetGuessField() {
  var guessField = $(".guessField");
  guessField.value = "";
  enable(guessField);
  focus(guessField);
}
