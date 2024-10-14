document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'D',
        q2: 'D',
        q3: 'D',
        q4: 'A',
        q5: 'C',
        q6: 'A',
        q7: 'B',
        q8: 'A',
        q9: 'A',
        q10: 'A',
        q11: 'C',
        q12: 'A',
        q13: 'B',
        q14: 'D',
        q15: 'B',
        q16: 'C',
        q17: 'C',
        q18: 'B',
        q19: 'A',
        q20: 'A',
        q21: 'A',
        q22: 'B',
        q23: 'B',
        q24: 'A',
        q25: 'A',
        q26: 'B',
        q27: 'B',
        q28: 'C',
        q29: 'C',
        q30: 'B',
        q31: 'A',
        q32: 'D',
        q33: 'B',
        q34: 'D',
        q35: 'A',
        q36: 'C',
        q37: 'A',
        q38: 'C',
        q39: 'C',
        q40: 'A',
        q41: 'A',
        q42: 'D',
        q43: 'A',
        q44: 'A',
        q45: 'C',
        q46: 'A',
        q47: 'C',
        q48: 'A',
        q49: 'A',
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