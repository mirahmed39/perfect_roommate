// javascript for changequestion.js route handler and changequestion.hbs

const userAnswers = document.querySelector("#user-answers").textContent.split(',');
//const changeQuestionForm = document.querySelector("#changeQuestionForm");
for(let i = 0; i<userAnswers.length; i++) {
    const classNameFormat = "question" + i;
    const radioButtonsForAQuestion = document.getElementsByClassName(classNameFormat);
        if (userAnswers[i] === "1")
            radioButtonsForAQuestion[0].setAttribute('checked', 'checked');
        else if (userAnswers[i] === "2")
            radioButtonsForAQuestion[1].setAttribute('checked', 'checked');
        else if (userAnswers[i] === "3")
            radioButtonsForAQuestion[2].setAttribute('checked', 'checked');
        else if (userAnswers[i] === "4")
            radioButtonsForAQuestion[3].setAttribute('checked', 'checked');
        else if (userAnswers[i] === "5")
            radioButtonsForAQuestion[4].setAttribute('checked', 'checked');
}

/*
the following block of code adds an 'click' eventlistener to the "Update Answers"
button. The handler simply checks if the user actually changed his/her previous
asnwers. If the user does not change anything then it will not submit the form and
will notify the user.
 */
function radioButtonChanged() {
    // do some cool stuff here.
    let changed = false;
    for(let i = 0; i < userAnswers.length; i++) {
        const classNameFormat = "question" + i;
        const answerInString = userAnswers[i] + "";
        let format = "input[name=" +classNameFormat+ "]:checked";
        const checkedValue = document.querySelector(format).value;
        if(answerInString !== checkedValue) {
            changed = true;
            return changed;
        }
    }
    return changed;
}

const updateButton = document.querySelector('#update-answer-button');
updateButton.addEventListener('click', function (event) {
    if(!radioButtonChanged()) {
        event.preventDefault();
        $("#updateAnswerErrorMessage").text("You have not changed any answers! Please select the radio " +
            "button(s) to change you answer(s)").css({"display":"block"});
    } else {
        $("#updateAnswerErrorMessage").css({"display":"none"});
    }
});

