
let QsArray = ["firstQ","secondQ","thirdQ","fourthQ","fifthQ", 
               "sixthQ","seventhQ","eighthQ","ninthQ","tenthQ"];

let results = {
    player =[],
    score =[]
}

function showLeaderBoard() {
    getElementById("leaderBoard").style.display = "block";
    getElementById("startPage").style.display === "none";
    getElementById("userName").style.display === "none";
    getElementById("Questions").style.display === "none";
    if (results[player] === undefined || results[player].length == 0) {
        let message = document.createAttribute('p');
        let info = document.createTextNode("No results to show!");
        message.appendChild(info);
        getElementById("leaderBoard").appendChild(message);
    }else{
        for(let i = 0; i<results[player].length; i++){
            let plRst = document.createElement('p');
            let plInfo = document.createTextNode(results.player[i] + " score is: " + results.score[i]);
            plRst.appendChild(plInfo);
            getElementById("leaderBoard").appendChild(plRst);
        }
    }
}


function enterName() {
    getElementById("leaderBoard").style.display = "none";
    getElementById("startPage").style.display === "none";
    getElementById("userName").style.display === "block";
    getElementById("Questions").style.display === "none";
}

function startQuiz() {
    getElementById("leaderBoard").style.display = "none";
    getElementById("startPage").style.display === "none";
    getElementById("userName").style.display === "block";
    getElementById("Questions").style.display === "none";
    let playerName = getElementById("name").value;
    if(playerName.length==0){
        alert("you must enter a name!");
    }else{
        results[player].push(playerName);
        getElementById("leaderBoard").style.display = "none";
        getElementById("startPage").style.display === "none";
        getElementById("userName").style.display === "none";
        getElementById("Questions").style.display === "block";
    }
}

function nextQ() {
    let counter = 1;
    if(counter != 10){
    //select random question
    let Qs = selectRandomQ();
    //hide other question div
    //show selected random question
    Qs.style.display === "block";
    //store chosen choice to something
    counter++;
    }else{
        //check sum of results
        //store it in results score array
        results[score].push();
        //hide questions div
        //show leader board
    }
}

function goBack(){
    getElementById("leaderBoard").style.display = "none";
    getElementById("startPage").style.display === "block";
    getElementById("userName").style.display === "none";
    getElementById("Questions").style.display === "none";
}


function selectRandomQ() {
    let randomQ;
    randomQ.getElementById(QsArray[Math.floor(Math.random() * QsArray.length)]);
}