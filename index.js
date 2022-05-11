var riddle = {
  question: "Висит груша нельзя скушать",
  correctAnswer: "лампочка",
  hints: ["это не съедобное", "это не фрукт"],
  tries: 3,
  checkAnswer(x) {
    // логика проверки правильного ответа
    if (this.tries) {
      if (x.toLowerCase() === this.correctAnswer) {
        alert("Правильный ответ");
        console.log("Правильный ответ");
        this.tries = 0;
      } else {
        alert("Неправильный ответ");
		  console.log("Неправильный ответ");
        if (this.tries === 2) {
          alert(this.hints[Math.floor(this.hints.length * Math.random())]);
        }
        this.tries--;
      }
    } else {
      alert("Игра окончена. Правильный ответ: лампочка");
    }
    console.log(this);
  },
};

window.onload = function () {
  document.getElementById("riddle").innerText = riddle.question;
};

function check() {
  var input = document.getElementsByTagName("input")[0];

  var guessedAnswer = input.value;

  if (guessedAnswer) {
    // вызывает функцию checkAnswer у объекта загадки, передав туда ответ
    riddle.checkAnswer(guessedAnswer);
  }
}
