document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'B',
        q2: 'A',
        q3: 'A',
        q4: 'B',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'A',
        q9: 'C',
        q10: 'A',
        q11: 'C',
        q12: 'A',
        q13: 'A',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'A',
        q18: 'A',
        q19: 'A',
        q20: 'B',
        q21: 'B',
        q22: 'A',
        q23: 'A',
        q24: 'A',
        q25: 'A',
        q26: 'A',
        q27: 'A',
        q28: 'A',
        q29: 'B',
        q30: 'A',
        q31: 'A',
        q32: 'B',
        q33: 'A',
        q34: 'A',
        q35: 'A',
        q36: 'B',
        q37: 'A',
        q38: 'A',
        q39: 'A',
        q40: 'A'

    };

    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of 40.`;
});