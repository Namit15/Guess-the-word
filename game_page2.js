player1_name=localStorage.getItem("Player 1 name:");
player2_name=localStorage.getItem("Player 2 name:");

var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn = "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn = "+ player2_name;

function send_btn()
{
    var get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    lengthDiv2=Math.floor(word.length/2);

    charAt2=word.charAt(lengthDiv2);
    console.log(charAt2);

    lengthSub1=word.length-1;

    charAt3=word.charAt(lengthSub1);
    console.log(charAt3);

    removeCharAt1=word.replace(charAt1,"*");
    removeCharAt2=removeCharAt1.replace(charAt2,"*");
    removeCharAt3=removeCharAt2.replace(charAt3,"*");
    console.log(removeCharAt3);

    quenstionWord="<h4 id='word_display'>Question: "+ removeCharAt3 +"</h4> <br>";
    inputBox="Answer  =<br><br><input type='text' id='inputCheck'> <br> <br>";
    buttonCheck="<button class='btn btn-primary' onclick='check()'>Check</button>";
    row=quenstionWord+inputBox+buttonCheck;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

questionTurn="Player_1";
answerTurn="Player_2";

function check()
{
    getAnswer=document.getElementById("inputCheck").value;
    answer=getAnswer.toLowerCase();
    console.log(answer);
    if(answer == word)
    {
        if(answerTurn == "Player_1")
        {
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(questionTurn == "Player_1")
    {
        questionTurn = "Player_2";
        document.getElementById("player_question").innerHTML="Question turn = "+player2_name;
    }
    else
    {
        questionTurn = "Player_1";
        document.getElementById("player_question").innerHTML="Question turn = "+player1_name;
    }

    if(answerTurn == "Player_1")
    {
        answerTurn="Player_2";
        document.getElementById("player_answer").innerHTML="Answer turn = "+player2_name;
    }
    else
    {
        answerTurn="Player_1";
        document.getElementById("player_answer").innerHTML="Answer turn ="+player1_name;
    }

    document.getElementById("output").innerHTML="";
}