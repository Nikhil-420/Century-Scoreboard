
const myModal = new bootstrap.Modal('#playerNameModal');
window.addEventListener('DOMContentLoaded', () => {
    myModal.show();
});

var incrimenter=0;
function addPlayer(){
    var player = document.getElementById("playerInput");
    var modalPlayerName = document.getElementById("modalPlayerName");
    var orderedList = document.getElementById("orderedList");
    modalPlayerName.innerHTML += "<p>" + player.value +"</P>";
    var inputId = "team"+incrimenter;
    var redId = "redTeam"+incrimenter;
    Number
    incrimenter++;
    orderedList.innerHTML += `<h4><li class="d-flex justify-content-between"><span>${player.value}</span>  <span><span id="${inputId}">0</span> (<span id="${redId}">0</span>)</span></li><h4>`
    player.value = '';
}

var teamId = 0;
function nextTurn(){
    var exp=document.querySelectorAll("li");
    if(teamId < exp.length-1){
        teamId = teamId + 1;
    }else{
        teamId = 0;
    }
    for (let i = 0; i < exp.length; i++) {
        exp[i].style.backgroundColor = "transparent";
        exp[i].style.boxShadow = "0 0 0 0";
      }
    document.getElementsByTagName("li")[teamId].style.backgroundColor = "#3cb61f";
    document.getElementsByTagName("li")[teamId].style.boxShadow = "0px 7px 16px 1px";
}

function Ball(x){
    var scoreId = "team"+teamId;
    var redId = "redTeam"+teamId;
    var redCount = document.getElementById(redId);
    var redNum = parseInt(redCount.innerText);
    var a = document.getElementById(scoreId);
    var a = parseInt(a.innerText);
    var b;
    if(a > 100){
        b = a - x;
    }else{
        b = a + x;
    }
    document.getElementById(scoreId).innerText = b;
    if(x == 15){
        redCount.innerText = redNum + 1;
    }
}

function foul(y){
    var scoreId = "team"+teamId;
    var a = document.getElementById(scoreId);
    var a = parseInt(a.innerText);
    var b;
    if(a > 100){
        b = a + y;
    }else{
        b = a - y;
    }
    document.getElementById(scoreId).innerText = b;
    nextTurn();
}

function exp2(y){
    document.getElementsByClassName("shadow")[y].style.visibility = "visible";
}

function expi(x){
    console.log("hey");
    document.getElementsByClassName("shadow")[x].style.visibility = "hidden";
    setTimeout(exp2,150,x);
}

