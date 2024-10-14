document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'A',
        q2: 'A',
        q3: 'D',
        q4: 'B',
        q5: 'A',
        q6: 'D',
        q7: 'C',
        q8: 'B',
        q9: 'A',
        q10: 'B',
        q11: 'A',
        q12: 'A',
        q13: 'A',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'A',
        q18: 'B',
        q19: 'A',
        q20: 'C',
        q21: 'A',
        q22: 'A',
        q23: 'A',
        q24: 'A',
        q25: 'C',
        q26: 'A',
        q27: 'A',
        q28: 'A',
        q29: 'B',
        q30: 'B',
        q31: 'B',
        q32: 'A',
        q33: 'A',
        q34: 'A',
        q35: 'B',
        q36: 'A',
        q37: 'B',
        q38: 'C',
        q39: 'C',
        q40: 'A',
        q41: 'A',
        q42: 'A',
        q43: 'B',
        q44: 'A',
        q45: 'A',
        q46: 'A',
        q47: 'A',
        q48: 'A',
        q49: 'A',
        q50: 'A'

    };

    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of 50.`;
});
