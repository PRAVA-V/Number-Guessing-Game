let computernum = parseInt(Math.floor(Math.random() * 100));
let c = 0;
function NumberGuess() {
    c++;
    console.log(c);
    let userNum = parseInt(document.getElementById("input").value);
    if (userNum >= 1 && userNum <= 99) {
        if (parseInt(c) === 11) {
            document.getElementById("store").innerHTML = `you are attempted more than 10 times..please replay the game!!!`
            let disabled = document.getElementById("submit");
            disabled.setAttribute('disabled', '');

        }
        else if (computernum < userNum) {
            document.getElementById("store").innerHTML = `you are largest..try to solve with another number <span>attempt(${c})</span>`;
            document.getElementById("store").style.backgroundColor = 'red';
        }
        else if (computernum > userNum) {
            document.getElementById("store").innerHTML = `you are smaller..try to solve with another number <span>attempt(${c})</span>`;
            document.getElementById("store").style.backgroundColor = 'red';
        }
        else if (computernum === userNum) {
            document.getElementById("store").innerHTML = `Hey Congratulations!!    You win!... <br>Thanks for your patience..have a nice day! <span>attempt(${c})</span>`;
            document.getElementById("store").style.backgroundColor = 'green';

        }
    }
    else {
        document.getElementById("store").innerHTML = `Enter the valid number..! Please read the instructions..and replay the game!`;
        document.getElementById("store").style.backgroundColor = 'orange';
    }
}


function replay() {
    location.reload();
}
