let computerScore = 0;
let userScore = 0;
const userScore_p = document.getElementById("user-score");
const computerScore_p = document.getElementById("computer-score");
const result_section = document.querySelector(".result");
const resultMessage_h3 = document.querySelector(".result-message");
const compChoice_img = document.getElementById("computer-choice-img");
const userChoice_img = document.getElementById("user-choice-img");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getComputerChoice = () => {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const results = (userChoice, computerChoice) => {

  if (computerChoice === 'p') {
    compChoice_img.src = './assets/paper.png';
  } else if (computerChoice === 's') {
    compChoice_img.src = './assets/scissors.png';
  } else {
    compChoice_img.src = './assets/rock.png';
  };

  if (userChoice === 'p') {
    userChoice_img.src = './assets/paper-user.png';
  } else if (userChoice === 's') {
    userChoice_img.src = './assets/scissors-user.png';
  } else {
    userChoice_img.src = './assets/rock-user.png';
  };

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      userScore++;
      resultMessage_h3.innerHTML = 'Winner: USER!';
      userScore_p.innerText = userScore;
      break;
    case "rp":
    case "ps":
    case "sr":
      computerScore++;
      resultMessage_h3.innerHTML = 'Winner: COMPUTER!';
      computerScore_p.innerText = computerScore;
      break;
    case "rr":
    case "pp":
    case "ss":
      resultMessage_h3.innerHTML = "IT'S A TIE!";
      break;
  };
};

const onclick = userChoice => {
  const computerChoice = getComputerChoice();
  results(userChoice, computerChoice);
};

const main = () => {
  rock_div.addEventListener('click', e => onclick(e.currentTarget.id));
  paper_div.addEventListener('click', e => onclick(e.currentTarget.id));
  scissors_div.addEventListener('click', e => onclick(e.currentTarget.id));
};

main();