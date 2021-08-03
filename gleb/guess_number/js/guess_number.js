import {
  $,
  renderSuccess,
  renderGameOver,
  renderError,
  renderResetGame,
  renderResetGuessField,
  renderGuesses,
} from "./ui.js";
import { getRandomNumber } from "./utils.js";

var STATUS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  GAME_OVER: "GAME_OVER",
};

var strategy = {
  [STATUS.SUCCESS]: function (state) {
    renderSuccess("Congratulations! You got it right!");
    renderGameOver("Start new game", renderResetGame);
  },
  [STATUS.GAME_OVER]: function (state) {
    renderGameOver("Start new game", renderResetGame);
  },
  [STATUS.ERROR]: function (state) {
    renderGuesses(state.guesses);
    renderError(
      getUserGuess(state),
      state.randomNumber,
      "Wrong!",
      "Last guess was too low!",
      "Last guess was too high!"
    );
    renderResetGuessField();
  },
};

export function getUserGuess(state) {
  return state.guesses.slice(-1)[0];
}

export function getStatus(state) {
  if (getUserGuess(state) === state.randomNumber) {
    return STATUS.SUCCESS;
  }

  if (state.guesses.length === 10) {
    return STATUS.GAME_OVER;
  }

  return STATUS.ERROR;
}

function main() {
  var state = {
    randomNumber: getRandomNumber(),
    guesses: [],
  };

  function updateState(status) {
    switch (status) {
      case STATUS.SUCCESS:
      case STATUS.GAME_OVER:
        state.guesses = [];
        state.randomNumber = getRandomNumber();
        break;
      default:
        break;
    }
  }

  $(".guessSubmit").addEventListener("click", function () {
    state.guesses.push(Number($(".guessField").value));
    var status = getStatus(state);
    updateState(status);
    strategy[status](state);
  });
}

main();
