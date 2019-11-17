let learnWord = document.querySelectorAll(".word");
for(let i = 0;i < learnWord.length;i++){
    learnWord[i].onclick = function(){
        window.open("learnWord.html");
    }      
}
console.log(learnWord.length)