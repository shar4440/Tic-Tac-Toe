let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset");
let resultDiv = document.querySelector (".result");
let turnO =true;

const winPatterns = [
  [0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6],
];

btns.forEach((btn) => {
  btn.addEventListener("click",() => {
    if(turnO){
      turnO = false;
      btn.innerText ="O";
    }
    else{
      turnO = true;
      btn.innerText = "X";
    }
    btn.disabled = true;
    checkWinner();
  });
});
let checkWinner = () => {
  for (let pattern of winPatterns){
    const pos1 = btns[pattern[0]].innerText;
    const pos2 = btns[pattern[1]].innerText;
    const pos3 = btns[pattern[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3 !=""){
      if(pos1 === pos2 && pos2 === pos3){
        resultDiv.innerText = `Congratulations, Winner ${pos1}`;
        for (let btn of btns) {
          btn.disabled = true;
        }
      }
    }
  }
}

const resetGame = () => {
  turnO =true;
  for (btn of btns){
    btn.disabled = false;
    btn.innerText ="";
    resultDiv.innerText = "";
  }
}
resetBtn.addEventListener("click",resetGame);