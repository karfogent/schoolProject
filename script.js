function changeNum(numUserClick)
{
    // numUserClick - номер символа на которую навёл пользователь
    numUserClick--;
    let ids = ["changeNum1", "changeNum2", "changeNum3", "changeNum4", "changeNum5", "changeNum6", "changeNum7", "changeNum8",];    
    let IdOf0 = document.getElementById(ids[numUserClick]);  
    if(IdOf0.innerText === "0")
    {
        IdOf0.onclick = function(){
        IdOf0.innerText =  "1";
    }
    }
    else{
        IdOf0.onclick = function(){
            IdOf0.innerHTML = "0";
        }
    }
}


