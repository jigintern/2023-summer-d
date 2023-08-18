const initPlayerHP=3;
let playerHP=initPlayerHP; //仮置き3回間違えたらゲームオーバー
let gameState;

export let gameScroe=100;

export function gameStateCheck(choice,quizNum){
    console.log(choice.dest)
    if(!isNaN(choice.dest) && !isNaN(parseInt(choice.dest))){
        if(choice.damaged){
            playerHP--;
            gameState=(playerHP>0) ? 0 : 3;
            console.log("けが");
            alert("怪我しました")
        }
        else{
            console.log("継続");
        }
    }
    else if(choice.dest.startsWith("e-10")){
        gameState=2;
        console.log("ゴール");
    }
    else if(choice.dest.startsWith("e-")){
        playerHP=0;
        gameState=1;
        console.log("終わり");
    }

    gameScroe=(quizNum-(initPlayerHP-playerHP)+100);
    console.log(gameScroe)
    return gameState;
}