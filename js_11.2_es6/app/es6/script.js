$(function() {

    let html = $('#testQuiz').html();

    const numQuestions = 3;
    const numAnswers = 3;

    let qstns = new Array(numQuestions);
    let answrs = new Array(numQuestions);
    for (let i = 0; i < numQuestions; i++) {
        answrs[i] = new Array(numAnswers);
    }

    const title = "Тест по программированию";
    const submitValue = "Проверить мои результаты";

    for (let i = 0; i < numQuestions; i++) {
        qstns[i] = JSON.parse(localStorage.getItem(`q${i+1}`));
        for (let j = 0; j < numAnswers; j++) {
            answrs[i][j] = JSON.parse(localStorage.getItem(`a${i+1}.${j+1}`));
        }
    }

    let content = tmpl(html, {
        headTitle: title,
        q_data: qstns,
        a_data: answrs,
        submitData: submitValue
    });
    $('body').append(content);

    $('.modalbox').modalbox();

});
