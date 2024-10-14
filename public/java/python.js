document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'A',
        q2: 'B',
        q3: 'D',
        q4: 'A',
        q5: 'B',
        q6: 'B',
        q7: 'C',
        q8: 'B',
        q9: 'A',
        q10: 'A',
        q11: 'A',
        q12: 'A',
        q13: 'C',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'C',
        q18: 'A',
        q19: 'B',
        q20: 'D',
        q21: 'A',
        q22: 'C',
        q23: 'B',
        q24: 'A',
        q25: 'C',
        q26: 'B',
        q27: 'A',
        q28: 'A',
        q29: 'B',
        q30: 'B',
        q31: 'B',
        q32: 'B',
        q33: 'B',
        q34: 'A',
        q35: 'B',
        q36: 'A',
        q37: 'A',
        q38: 'D',
        q39: 'A',
        q40: 'A',
        q41: 'A',
        q42: 'A',
        q43: 'A',
        q44: 'A',
        q45: 'C',
        q46: 'A',
        q47: 'D',
        q48: 'A',
        q49: 'B',
        q50: 'C'
    };

    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of 50.`;
});