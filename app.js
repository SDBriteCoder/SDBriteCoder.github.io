// console.log("Hello RPS");
// var a = ['🥚', '🐔'];
// a.sort();
// console.log(a); 
let userScore = 0 ;
let computerScore = 0 ;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s"); 

function getComputerChoice() 
{
    const choices = ['r' , 'p' , 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter)
{
    if ( letter == "r") return "Rock" ;
    if ( letter == "p") return "Paper" ;
    return "Scissor" ;
}

function win(userChoice, computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord +" beats " + convertToWord(computerChoice) + smallCompWord +". You Win ;) " ;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() 
    {
        userChoice_div.classList.remove('green-glow');
    }, 500);
}
function lose(userChoice, computerChoice)
{
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord +" loses to " + convertToWord(computerChoice) + smallCompWord +". You Lost :(" ;
    userChoice_div.classList.add('red-glow');
    //can use this too for setTimeout
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}
function draw(userChoice, computerChoice)
{
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord +" equals " + convertToWord(computerChoice) + smallCompWord +". It's a draw !" ;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(function() 
    {
        userChoice_div.classList.remove('yellow-glow');
    }, 500);
}

function game(userChoice)
{
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;
        default:
            draw(userChoice, computerChoice);
        break;
    }
} 

function main()
{
    rock_div.addEventListener('click', () => game("r"));
                            // can use this too for function
    paper_div.addEventListener('click', function() 
    {
        game("p");
    })
    scissor_div.addEventListener('click', function() 
    {
        game("s");
    })
}

main();