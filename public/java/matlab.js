document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'A',
        q2: 'C',
        q3: 'A',
        q4: 'B',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'B',
        q9: 'B',
        q10: 'B',
        q11: 'A',
        q12: 'B',
        q13: 'A',
        q14: 'A',
        q15: 'B',
        q16: 'B',
        q17: 'A',
        q18: 'C',
        q19: 'A',
        q20: 'A',
        q21: 'A',
        q22: 'B',
        q23: 'D',
        q24: 'D',
        q25: 'A',
        q26: 'B',
        q27: 'A',
        q28: 'B',
        q29: 'B',
        q30: 'A',
        q31: 'A',
        q32: 'B',
        q33: 'A',
        q34: 'A',
        q35: 'A',
        q36: 'A',
        q37: 'A',
        q38: 'A',
        q39: 'A',
        q40: 'A',
        q41: 'A',
        q42: 'A',
        q43: 'A',
        q44: 'B',
        q45: 'A',
        q46: 'B',
        q47: 'A',
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