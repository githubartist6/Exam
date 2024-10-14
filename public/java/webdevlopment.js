document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'A',
        q2: 'B',
        q3: 'B',
        q4: 'A',
        q5: 'C',
        q6: 'B',
        q7: 'B',
        q8: 'A',
        q9: 'A',
        q10: 'C',
        q11: 'B',
        q12: 'A',
        q13: 'A',
        q14: 'A',
        q15: 'C',
        q16: 'B',
        q17: 'C',
        q18: 'B',
        q19: 'B',
        q20: 'B',
        q21: 'B',
        q22: 'A',
        q23: 'B',
        q24: 'B',
        q25: 'B',
        q26: 'B',
        q27: 'A',
        q28: 'C',
        q29: 'B',
        q30: 'B',
        q31: 'A',
        q32: 'C',
        q33: 'B',
        q34: 'D',
        q35: 'B',
        q36: 'A',
        q37: 'B',
        q38: 'A',
        q39: 'B',
        q40: 'A',
        q41: 'C',
        q42: 'B',
        q43: 'D',
        q44: 'B',
        q45: 'A',
        q46: 'A',
        q47: 'D',
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