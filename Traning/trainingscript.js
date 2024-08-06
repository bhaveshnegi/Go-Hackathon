function toggleFaq(index) {
    var answers = document.querySelectorAll('.faq-answer');
    var questions = document.querySelectorAll('.faq-question');

    if (answers[index].style.display === 'block') {
        answers[index].style.display = 'none';
        questions[index].classList.remove('active');
    } else {
        for (var i = 0; i < answers.length; i++) {
            answers[i].style.display = 'none';
            questions[i].classList.remove('active');
        }
        answers[index].style.display = 'block';
        questions[index].classList.add('active');
    }
}
