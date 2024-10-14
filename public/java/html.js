document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'C',
        q2: 'B',
        q3: 'B',
        q4: 'A',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'C',
        q9: 'A',
        q10: 'A',
        q11: 'A',
        q12: 'A',
        q13: 'A',
        q14: 'B',
        q15: 'D',
        q16: 'D',
        q17: 'B',
        q18: 'B',
        q19: 'D',
        q20: 'B',
        q21: 'C',
        q22: 'B',
        q23: 'B',
        q24: 'A',
        q25: 'A',
        q26: 'A',
        q27: 'A',
        q28: 'C',
        q29: 'A',
        q30: 'A',
        q31: 'A',
        q32: 'A',
        q33: 'A',
        q34: 'B',
        q35: 'D',
        q36: 'D',
        q37: 'B',
        q38: 'B',
        q39: 'D',
        q40: 'B',
        q41: 'A',
        q42: 'A',
        q43: 'A',
        q44: 'A',
        q45: 'A',
        q46: 'A',
        q47: 'A',
        q48: 'A',
        q49: 'B',
        q50: 'B'
    };

    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of 50.`;
});
