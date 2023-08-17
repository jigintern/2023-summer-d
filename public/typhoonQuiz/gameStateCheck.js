let playerHP=3; //仮置き3回間違えたらゲームオーバー
let gameState;

export function gameStateCheck(choice){
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

    return gameState;
}