document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'D',
        q2: 'B',
        q3: 'A',
        q4: 'A',
        q5: 'B',
        q6: 'A',
        q7: 'C',
        q8: 'A',
        q9: 'B',
        q10: 'C',
        q11: 'D',
        q12: 'A',
        q13: 'C',
        q14: 'A',
        q15: 'B',
        q16: 'A',
        q17: 'A',
        q18: 'A',
        q19: 'B',
        q20: 'C',
        q21: 'D',
        q22: 'A',
        q23: 'B',
        q24: 'B',
        q25: 'A',
        q26: 'B',
        q27: 'A',
        q28: 'B',
        q29: 'B',
        q30: 'B',
        q31: 'A',
        q32: 'A',
        q33: 'D',
        q34: 'B',
        q35: 'A',
        q36: 'B',
        q37: 'B',
        q38: 'B',
        q39: 'B',
        q40: 'B',
        q41: 'A',
        q42: 'C',
        q43: 'C',
        q44: 'A',
        q45: 'B',
        q46: 'C',
        q47: 'B',
        q48: 'A',
        q49: 'B',
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