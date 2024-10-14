document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: "C",
        q2: "B",
        q3: "B",
        q4: "C",
        q5: "A",
        q6: "A",
        q7: "A",
        q8: "A",
        q9: "B",
        q10: "D",
        q11: "A",
        q12: "A",
        q13: "A",
        q14: "A",
        q15: "B",
        q16: "A",
        q17: "C",
        q18: "B",
        q19: "A",
        q20: "A",
        q21: "C",
        q22: "A",
        q23: "D",
        q24: "A",
        q25: "A",
        q26: "A",
        q27: "D",
        q28: "A",
        q29: "A",
        q30: "A",
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