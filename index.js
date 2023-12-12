// let enhanceChance = 7;
// let enhanceLevel = 0;

// function enhanceItem(){
//     if(enhanceChance === 0){
//         return alert("강화 기회가 음서요");
//     }
//     const probability = document.querySelector("#scrollProbability option:checked").value;
//     let randomValue = Math.random() * 100;
//     const isSuccess  = randomValue <= probability;
//     if(isSuccess){
//         enhanceLevel++;
//         alert("강화에 성공했습니다. "+enhanceLevel+ "강으로 업그레이드");
//     }else{
//         alert("강화에 실패하였습니다. "+enhanceLevel+ "강 유지");
//     }
//     enhanceChance--;
//     calculateEnhancementProbabilities(0.6, enhanceChance ,enhanceLevel);
//     console.log("남은기회 : "+ enhanceChance);
//     console.log("강화단계 : "+ enhanceLevel);
// }

// function resetProbability(){

// }


// function enhanceChanceReset(){
//     enhanceChance = 7;
//     enhanceLevel = 0;
// }



// function calculateEnhancementProbabilities(baseProbability, remainingAttempts, level) {
//     const probabilities = Array.from({ length: remainingAttempts + 1 }, () => 0);

//     for (let attempt = 0; attempt <= remainingAttempts; attempt++) {
//         probabilities[attempt] = binomialCoefficient(remainingAttempts, attempt) * 
//                                  Math.pow(baseProbability, attempt) * 
//                                  Math.pow(1 - baseProbability, remainingAttempts - attempt) * 100;
//     }

//     // 결과 출력
//     //console.log(`0강일 확률: ${(probabilities[0] || 0).toFixed(2)}%`);
//     for (let i = 1; i <= remainingAttempts; i++) {
//         console.log(`${i}강일 확률: ${(probabilities[i] || 0).toFixed(2)}%`);
//     }
//     console.log("----------------------------------------------------------");
// }

// function binomialCoefficient(n, k) {
//     return factorial(n) / (factorial(k) * factorial(n - k));
// }

// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// // 예시: 60% 확률로 2번 기회가 남았을 때
// calculateEnhancementProbabilities(0.6, enhanceChance ,enhanceLevel);


let enhanceChance = 7;
let enhanceLevel = 0;

function enhanceItem(){
    if(enhanceChance === 0){
        return alert("강화 기회가 음서요");
    }
    const probability = document.querySelector("#scrollProbability option:checked").value;
    let randomValue = Math.random() * 100;
    const isSuccess = randomValue <= probability;
    if(isSuccess){
        enhanceLevel++;
        alert("강화에 성공했습니다. " + enhanceLevel + "강으로 업그레이드");
    }else{
        alert("강화에 실패하였습니다. " + enhanceLevel + "강 유지");
    }
    enhanceChance--;
    calculateEnhancementProbabilities(probability/100, enhanceChance, enhanceLevel);
    console.log("남은기회 : " + enhanceChance);
    console.log("강화단계 : " + enhanceLevel);
    console.log("----------------------------------------------------------");
}


function enhanceChanceReset(){
    enhanceChance = 7;
    enhanceLevel = 0;
}

function calculateEnhancementProbabilities(baseProbability, remainingAttempts, level) {
    const probabilities = Array.from({ length: remainingAttempts + 1 }, () => 0);

    for (let attempt = 0; attempt <= remainingAttempts; attempt++) {
        probabilities[attempt] = binomialCoefficient(remainingAttempts, attempt) * 
                                 Math.pow(baseProbability, attempt) * 
                                 Math.pow(1 - baseProbability, remainingAttempts - attempt) * 100;
    }
    console.log("----------------------------------------------------------");
    // 결과 출력
    for (let i = 0; i <= remainingAttempts; i++) {
        console.log(`${level + i}강일 확률: ${(probabilities[i] || 0).toFixed(2)}%`);
    }

}

function binomialCoefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
