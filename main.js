const playButton = document.getElementById("play");

const setCookie = (name, value, exp_days) => {
  let d = new Date();
  d.setTime(d.getTime() + exp_days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

playButton.addEventListener("click", () => {
  const username = prompt("Please enter username");
  setCookie("username", username, 30);
  let point = 0;
  setCookie("point", point, 30);

  const guessingGame = (range) => {
    const rndGuess = Math.floor(Math.random() * range + 1);
    const guess = prompt(`Enter a number btw 1 and ${range}`);
    const userGuess = Number(guess);

    if (rndGuess === userGuess) {
      point = point + 1;
      setCookie("point", point, 30);
      alert(`You won!, ${username}, You've scored ${point} point`);
      guessingGame(range + 1);
    } else {
      alert("Game over");
    }

    console.log(userGuess);
  };

  guessingGame(2);
});
