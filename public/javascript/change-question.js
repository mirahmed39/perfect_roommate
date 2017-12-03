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
const updateButton = document.querySelector('#update-answer-button');

updateButton.addEventListener('click', function (event) {
    $("#changeQuestionForm :input").change(function() {
        $("#changeQuestionForm").data('changed',true);
    });
    if(!($("#changeQuestionForm").data('changed'))) {
        event.preventDefault();
        $("#updateAnswerErrorMessage").text("You have not changed any answers! Please select the radio " +
            "button(s) to change you answer(s)").css({"display":"block"});
    }
});

/*
loop through the inputs
 */
