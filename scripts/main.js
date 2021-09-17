console.log(document.title);

function scratchAnswer() {
    var answerElement = this.parentNode.children[0].children[1];
    
    if (answerElement.style.textDecoration == "line-through") {
        answerElement.style.textDecoration = "none";
    } else {
        answerElement.style.textDecoration = "line-through";
    }

    return false;
}

if (document.title.includes("Quiz")) {
    var answersList = document.getElementsByClassName("answer");

    for (var i = 0; i < answersList.length; i++) {
        let scratchButton = document.createElement("button");
        scratchButton.type = "button";
        scratchButton.style = "background: rgb(30, 71, 123); color: white; text-align: center; padding: 2px 3px; font-size: small; border: none;";
        scratchButton.innerText = "Scratch"
        scratchButton.onclick = scratchAnswer;
        answersList[i].appendChild(scratchButton);
    }
}
