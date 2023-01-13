function runAll(event){
    

    handleSelectDifficulty();
    handleSelectCodeUses();
    handleSelectPerformance();
    handleSelectDevType();
    handleSelectInterestedIn();

    getResult();
    displayResults();
    event.preventDefault();
}

function handleSelectDifficulty() {
    const chooseDiff = document.getElementById("difficulty").value;
    return chooseDiff
}

function handleSelectCodeUses(){
    const chooseUse = document.getElementById("codeUses").value;
    return chooseUse
}

function handleSelectPerformance(){
    const choosePerformance = document.getElementById("performance").value;
    return choosePerformance
}

function handleSelectDevType(){
    const chooseDevType = document.getElementById("devType").value;
    return chooseDevType
}

function handleSelectInterestedIn(){
    const chooseInterestedIn = document.getElementById("interestedIn").value;
    return chooseInterestedIn
}

function getResult() {

   let diff = parseInt(handleSelectDifficulty())
   let code = parseInt(handleSelectCodeUses())
   let perf = parseInt(handleSelectPerformance())
   let dev =  parseInt(handleSelectDevType())
   let inter = parseInt(handleSelectInterestedIn())

   let finalResults
   let combined = diff + code + perf + dev + inter

   if (combined <= 20 && combined >=10){
    finalResults = "You Should Code With C#"
   } else if(combined <= 9 && combined >= 8){
    finalResults = "You Should Code With JavaScript"
   } else if(combined <= 7 && combined >= 5){
    finalResults = "You Should Code With Python"
   } else(finalResults = "ERROR")

   return finalResults;
}

function displayResults(){
    const results = document.getElementById("results");
    results.innerHTML=(getResult());
    return results;
}


window.addEventListener("load", function(){
   document.getElementById("whole-form").addEventListener("submit", runAll);
});