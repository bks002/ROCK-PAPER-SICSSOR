let Yscore=0;
let Cscore=0;

const X = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let container = document.querySelector(".msgContainer");
// console.log(container);
let YscorePara= document.querySelector("#Yscore");
let CscorePara= document.querySelector("#Cscore");

const genCchoice = () => {
    const option = ["Rock", "Paper", "Scissor"];
    const index=Math.floor(Math.random()*3);
    return option[index];
}

const drawGame =() =>
{
    console.log("Game is Draw");
    msg.innerText="Match is Draw! Play Again.";
    msg.style.backgroungColour = "yellow";
}

const showWinner=(Ywin,Ychoice,Cchoice) =>{
    if(Ywin)
    {
    Yscore++;
    YscorePara.innerText=Yscore;
    console.log("You Win!");
    msg.innerText=`You Win! Your ${Ychoice} beats Computer's ${Cchoice}`;
    msg.style.backgroungColour="green";
    }
    else
    {
    Cscore++;
    CscorePara.innerText=Cscore;
    console.log("Computer Win!");
    msg.innerText=`Computer Win! Computer's ${Cchoice} beats Your ${Ychoice}`;
    container.style.backgroungColourcolour="red";
    }
}

const playGame = (Ychoice) => {
    console.log("User's Choice=", Ychoice);
    //generating computer's choice
    const Cchoice= genCchoice();
    console.log("Computer's Choice=", Cchoice);
    let Ywin= true;
    if(Ychoice===Cchoice)
    {
        drawGame();
    }
    else
    {
        if(Ychoice=== "Rock")
        {
            //Cchoice = Paper||Scissor
            Ywin=(Cchoice=== "Paper")?false:true;
        }
        if(Ychoice=== "Paper")
        {
            //Choice= Rock||Scissor
            Ywin= (Cchoice === "Rock")?true:false;
        } 
        if(Ychoice === "Scissor")
        {
            //Choice= Paper||Rock
            Ywin=(Cchoice === "Paper")?true:false;
        }
        showWinner(Ywin,Ychoice,Cchoice);
    }
        
    }
X.forEach((choice) => 
{
    choice.addEventListener("click", () => {
        const Ychoice = choice.getAttribute("id");
        playGame(Ychoice);
    });
});

