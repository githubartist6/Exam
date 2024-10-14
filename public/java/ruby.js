document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'B',
        q2: 'D',
        q3: 'C',
        q4: 'A',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'D',
        q9: 'A',
        q10: 'B',
        q11: 'B',
        q12: 'B',
        q13: 'A',
        q14: 'D',
        q15: 'A',
        q16: 'B',
        q17: 'A',
        q18: 'D',
        q19: 'B',
        q20: 'A',
        q21: 'A',
        q22: 'C',
        q23: 'A',
        q24: 'A',
        q25: 'D',
        q26: 'B',
        q27: 'B',
        q28: 'A',
        q29: 'A',
        q31: 'C',
        q32: 'D',
        q33: 'D',
        q34: 'A',
        q35: 'B',
        q36: 'B',
        q37: 'A',
        q38: 'A',
        q39: 'A',
        q40: 'A',
        q41: 'A',
        q42: 'A',
        q43: 'A',
        q44: 'B',
        q45: 'B',
        q46: 'D',
        q47: 'C',
        q48: 'A',
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
