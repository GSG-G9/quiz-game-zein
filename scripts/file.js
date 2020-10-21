
let QsArray = ["firstQ", "secondQ", "thirdQ", "fourthQ", "fifthQ",
    "sixthQ", "seventhQ", "eighthQ", "ninthQ", "tenthQ"];

let results = {
    player =[],
    score =[]
}
//when "LEADER BOARD" is pressed
function showLeaderBoard() { //finished
    getElementById("leaderBoard").style.display = "block";
    getElementById("startPage").style.display === "none";
    getElementById("userName").style.display === "none";
    getElementById("Questions").style.display === "none";
    if (results[player] === undefined || results[player].length == 0) {
        let message = document.createAttribute('p');
        let info = document.createTextNode("No results to show!");
        message.appendChild(info);
        getElementById("leaderBoard").appendChild(message);
    } else {
        for (let i = 0; i < results[player].length; i++) {
            let plRst = document.createElement('p');
            let plInfo = document.createTextNode(results.player[i] + " score is: " + results.score[i]);
            plRst.appendChild(plInfo);
            getElementById("leaderBoard").appendChild(plRst);
        }
    }
}

//when "start quiz" is pressed
function enterName() { //finished
    getElementById("userName").style.display === "block";
    getElementById("leaderBoard").style.display = "none";
    getElementById("startPage").style.display === "none";
    getElementById("Questions").style.display === "none";
}
//when "back" is pressed
function goBack() { //finished
    getElementById("leaderBoard").style.display = "none";
    getElementById("startPage").style.display === "block";
    getElementById("userName").style.display === "none";
    getElementById("Questions").style.display === "none";
}

//to select a random question
function selectRandomQ() { //finished
    let randomOne;
    let randomQ = randomOne.getElementById(QsArray[Math.floor(Math.random() * QsArray.length)]);
    return randomQ;
}


//when "submit" in entering name page is pressed
function startQuiz() { //unfinished
    getElementById("userName").style.display === "block";
    getElementById("leaderBoard").style.display = "none";
    getElementById("startPage").style.display === "none";
    getElementById("Questions").style.display === "none";
    let playerName = getElementById("name").value;
    if (playerName.length == 0) {
        alert("you must enter a name!");
    } else {
        results[player].push(playerName);
        getElementById("leaderBoard").style.display = "none";
        getElementById("startPage").style.display === "none";
        getElementById("userName").style.display === "none";
        getElementById("Questions").style.display === "block";
        let question1 = selectRandomQ();
        //make this only question appear and hide others
        question1.style.display === "block";
    }
}

//when "next" in each question div is pressed is pressed
function nextQ() { //unfinished
    let counter = 1;
    let sumOfResult = 0;
    if (counter != 10) {
        //hide other question div
        //select random question
        let Qs = selectRandomQ();
        //show selected random question
        Qs.style.display === "block";
        //show question's number
        let QNumberView = document.createElement('p');
        let QNumber = document.createTextNode(counter + "/10");
        QNumberView.appendChild(QNumber);
        Qs.appendChild(QNumberView);
        //check if the right answer is chosen
        if(rbt.checked){
            //add it to sum of result
        }
        counter++;
    } else {
        //check sum of results
        //store it in results score array
        results[score].push(sumOfResult);
        //hide questions div
        getElementById("Questions").style.display === "none";
        //show leader board
        getElementById("leaderBoard").style.display = "block";
        getElementById("startPage").style.display === "none";
        getElementById("userName").style.display === "none";
        for (let i = 0; i < results[player].length; i++) {
            let plRst = document.createElement('p');
            let plInfo = document.createTextNode(results.player[i] + " score is: " + results.score[i]);
            plRst.appendChild(plInfo);
            getElementById("leaderBoard").appendChild(plRst);
        }
    }
}
