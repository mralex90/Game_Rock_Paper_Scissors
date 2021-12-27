const tools = ['rock', 'paper', 'scissors'];

const getRandomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

const userAnswer = prompt("Rock, scissors or paper?"); // NULL если юзер не ввел в окно ничего

const randomIndex = getRandomNumber(0, 2);
const computerAnswer = tools[randomIndex];

console.log(`Your answer is ${userAnswer}`);
console.log(`Computer answer is ${computerAnswer}`);

const startGame = (userAnswer, computerAnswer) => {
    userAnswer = userAnswer.toLowerCase();
    if (!userAnswer || !tools.includes(userAnswer)) {
        return "Wrong answer"; // если не введено в окно ничего 
    }     

    let res = ''

    const isDraw = userAnswer === computerAnswer;
    const isUserWin = (userAnswer === 'rock' && computerAnswer === 'scissors') || 
    (userAnswer === 'paper' && computerAnswer === 'rock') || 
    (userAnswer === 'scissors' && computerAnswer === 'paper');

    if(isDraw) res = "It's draw";
    else if (isUserWin) res = "You Win :)";
    else res = "You lose :("

    return res;
};

const result = startGame(userAnswer, computerAnswer);
alert(result);