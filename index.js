let enhanceChance = 7;
let enhanceLevel = 0;

function enhanceItem(){
    if(enhanceChance === 0){
        return alert("강화 기회가 음서요");
    }
    const probability = document.querySelector("#scrollProbability option:checked").value;
    let randomValue = Math.random() * 100;
    const isSuccess  = randomValue <= probability;
    if(isSuccess){
        enhanceLevel++;
        alert("강화에 성공했습니다. "+enhanceLevel+ "강으로 업그레이드");
    }else{
        alert("강화에 실패하였습니다. "+enhanceLevel+ "강 유지");
    }
    enhanceChance--;
}

function enhanceChanceReset(){
    enhanceChance = 7;
    enhanceLevel = 0;
}
