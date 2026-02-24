let userScore = 0;
let compScore = 0;


 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 
 const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");

  
const gencomputerchoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option [randIdx];
};

const drawGame = () =>{
        msg.innerText = "Game was Draw.play again."
    msg.style.backgroundColor = "green";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "brown";
    }
};

const playgame = (userchoice)=>{
    console.log("user choice =", userchoice);
    const compchoice = gencomputerchoice ();
    console.log("compchoice =", compchoice);

    if (userchoice === compchoice) {
drawGame();
    } else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compchoice ==="paper" ? false: true;
        } else if (userchoice ==="paper"){
            userWin = compchoice === "scissors" ? false : true;
        } else {
          userWin = compchoice ==="rock" ? false : true;

        }
        showWinner(userWin);
    }
};
 choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice. id;
        playgame(userchoice);
        
        });

 });
