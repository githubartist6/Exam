document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'A',
        q2: 'B',
        q3: 'B',
        q4: 'A',
        q5: 'B',
        q6: 'A',
        q7: 'A',
        q8: 'A',
        q9: 'B',
        q10: 'A',
        q11: 'A',
        q12: 'A',
        q13: 'A',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'A',
        q18: 'B',
        q19: 'A',
        q20: 'A',
        q21: 'A',
        q22: 'A',
        q23: 'A',
        q24: 'B',
        q25: 'A',
        q26: 'A',
        q27: 'A',
        q28: 'A',
        q29: 'B',
        q30: 'A',
        q31: "B",
        q32: "A",
        q33: "B",
        q34: "A",
        q35: "A",
        q36: "A",
        q37: "A",
        q38: "A",
        q39: "A",
        q40: "A",
        q41: "A",
        q42: "A",
        q43: "A",
        q44: "B",
        q45: "A",
        q46: "A",
        q47: "B",
        q48: "A",
        q49: "A",
        q50: "A"

    };

    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of 50.`;
});
