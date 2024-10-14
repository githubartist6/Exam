document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'A',
        q2: 'B',
        q3: 'D',
        q4: 'A',
        q5: 'A',
        q6: 'B',
        q7: 'B',
        q8: 'A',
        q9: 'A',
        q10: 'C',
        q11: 'A',
        q12: 'D',
        q13: 'A',
        q14: 'A',
        q15: 'D',
        q16: 'D',
        q17: 'A',
        q18: 'D',
        q19: 'A',
        q20: 'B',
        q21: 'A',
        q22: 'A',
        q23: 'A',
        q24: 'B',
        q25: 'C',
        q26: 'D',
        q27: 'B',
        q28: 'A',
        q29: 'B',
        q30: 'B',
        q31: 'A',
        q32: 'D',
        q33: 'B',
        q34: 'A',
        q35: 'A',
        q36: 'A',
        q37: 'A',
        q38: 'D',
        q39: 'D',
        q40: 'B',
        q41: 'B',
        q42: 'B',
        q43: 'A',
        q44: 'B',
        q45: 'D',
        q46: 'C',
        q47: 'D',
        q48: 'B',
        q49: 'A',
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
