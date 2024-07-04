let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");

let userpara = document.getElementById("user_score");
let comppara = document.getElementById("comp_score");

const getCompChoice = () => {
    const option = ["rock","paper","scissor"];
    const randidx =Math.floor(( Math.random() * 3 ));
    return option[randidx];
}

const drawGame = () => {
    msg.innerText = ("Game is tied ,Hope you win next Time.....");
    msg.style.backgroundColor = ("rgb(42, 79, 189)");
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        userscore++;
        userpara.innerText = userscore;
        msg.innerText = `You Won! ,Your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        comppara.innerText = compscore;
        msg.innerText = `You lost! ,Your ${userChoice} lost by ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    
    if( compChoice == userChoice){
        drawGame();
    }
    else {
        let userWin = true;

        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner (userWin,userChoice,compChoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}); 

