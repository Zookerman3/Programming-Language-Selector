function runAll(event){
    event.preventDefault();

    handleSelectDifficulty();
    handleSelectCodeUses();
    handleSelectPerformance();
    handleSelectDevType();
    handleSelectInterestedIn();

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

function printResults() {

    let diff = parseInt(handleSelectDifficulty())
    let code = parseInt(handleSelectCodeUses())
    let perf = parseInt(handleSelectPerformance())
    let dev =  parseInt(handleSelectDevType())
    let inter = parseInt(handleSelectInterestedIn())
    
    const finalResults = document.getElementById("results")
    if (diff + code + perf + dev + inter >)
    }

   window.addEventListener("load", function() {
    document.getElementById("whole-form").addEventListener("submit", runAll);
   });