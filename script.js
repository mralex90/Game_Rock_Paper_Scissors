const tools = ['rock', 'paper', 'scissors'];

const getRandomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

const userAnswer = prompt("Rock, scissors or paper?"); // NULL если юзер не ввел в окно ничего

const randomIndex = getRandomNumber(0, 2);
const computerAnswer = tools[randomIndex];
// console.log(computerAnswer);

const startGame = (userAnswer, computerAnswer) => {
    if(!userAnswer) {
        return "Wrong answer"; // если не введено в окно ничего 
    }     
};
const result = startGame(userAnswer, computerAnswer);
alert(result);