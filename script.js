const tools = ['rock', 'paper', 'scissors']; // наш массив

const getRandomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min); // ф-ия для генерации рандомного целого! числа

const userAnswer = prompt("Rock, scissors or paper?"); // получение ответа от юзера / NULL если юзер не ввел в окно ничего

const randomIndex = getRandomNumber(0, 2); // будет возвращать целое рандомное число
const computerAnswer = tools[randomIndex]; // tools будет подбирать индекс: 0(rock) / 1(paper) / 2(scissors)

console.log(`Your answer is ${userAnswer}`);
console.log(`Computer answer is ${computerAnswer}`);

const startGame = (userAnswer, computerAnswer) => {
    userAnswer = userAnswer.toLowerCase(); // кладем в переменную userAnswer ту же переменную, только в нижнем регистре
    if (!userAnswer || !tools.includes(userAnswer)) { // проверка
        return "Wrong answer"; // если ничего не введено либо введено то, чего нет в массиве
    }     

    let res = ''; // пустая строка

    const isDraw = userAnswer === computerAnswer; // условия ничьи
    const isUserWin = (userAnswer === 'rock' && computerAnswer === 'scissors') || // условия для победы
    (userAnswer === 'paper' && computerAnswer === 'rock') ||   // условия для победы
    (userAnswer === 'scissors' && computerAnswer === 'paper');  // условия для победы

    if(isDraw) res = "It's draw"; // при ничьей выпадает окно с результатом
    else if (isUserWin) res = "You Win :)"; // при выигрышных условиях выводится "You Win :)"
    else res = "You lose :("  // при всех остальных "You lose :("

    return res; // возвращает результат
};

const result = startGame(userAnswer, computerAnswer);
alert(result); // выводится result