
let QsArray = ["firstQ", "secondQ", "thirdQ", "fourthQ", "fifthQ",
    "sixthQ", "seventhQ", "eighthQ", "ninthQ", "tenthQ"];

let results = {
    player: [],
    score: []
}
//when "LEADER BOARD" is pressed
function showLeaderBoard() { //finished
    document.getElementById('leaderBoard').style.display = "block";
    document.getElementById('startPage').style.display = "none";
    document.getElementById('userName').style.display = "none";
    document.getElementById('Questions').style.display = "none";
    if (results.player === undefined || results.player.length == 0) {
        let message = document.createElement('p');
        let info = document.createTextNode("No results to show!");
        message.appendChild(info);
        document.getElementById('leaderBoard').appendChild(message);
    } else {
        for (let i = 0; i < results[player].length; i++) {
            let plRst = document.createElement('p');
            let plInfo = document.createTextNode(results.player[i] + " score is: " + results.score[i]);
            plRst.appendChild(plInfo);
            document.getElementById('leaderBoard').appendChild(plRst);
        }
    }
}

//when "start quiz" is pressed
function enterName() { //finished
    document.getElementById('userName').style.display = "block";
    document.getElementById('leaderBoard').style.display = "none";
    document.getElementById('startPage').style.display = "none";
    document.getElementById('Questions').style.display = "none";
}
//when "back" is pressed
function goBack() { //finished
    document.getElementById('leaderBoard').style.display = "none";
    document.getElementById('startPage').style.display = "block";
    document.getElementById('userName').style.display = "none";
    document.getElementById('Questions').style.display = "none";
}

//to select a random question
function selectRandomQ() { //finished
    let randomQ = document.getElementById(QsArray[Math.floor(Math.random() * QsArray.length)]);
    return randomQ;
}


//when "submit" in entering name page is pressed
function startQuiz() { //unfinished
    document.getElementById('userName').style.display = "block";
    document.getElementById('leaderBoard').style.display = "none";
    document.getElementById('startPage').style.display = "none";
    document.getElementById('Questions').style.display = "none";
    let playerName = document.getElementById('name').value;
    if (playerName.length == 0) {
        alert("you must enter a name!");
    } else {
        results.player.push(playerName);
        document.getElementById('leaderBoard').style.display = "none";
        document.getElementById('startPage').style.display = "none";
        document.getElementById('userName').style.display = "none";
        document.getElementById('Questions').style.display = "block";
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
        Qs.style.display = "block";
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
        document.getElementById('Questions').style.display = "none";
        //show leader board
        document.getElementById('leaderBoard').style.display = "block";
        document.getElementById('startPage').style.display = "none";
        document.getElementById('userName').style.display = "none";
        for (let i = 0; i < results[player].length; i++) {
            let plRst = document.createElement('p');
            let plInfo = document.createTextNode(results.player[i] + " score is: " + results.score[i]);
            plRst.appendChild(plInfo);
            document.getElementById('leaderBoard').appendChild(plRst);
        }
    }
}
