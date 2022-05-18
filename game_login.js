function add_user()
{
    player_1_name=document.getElementById("player_1_name_input").value;
    player_2_name=document.getElementById("player_2_name_input").value;
    localStorage.setItem("Player 1 name:",player_1_name);
    localStorage.setItem("Player 2 name:",player_2_name);
    window.location="game_page.html";
}