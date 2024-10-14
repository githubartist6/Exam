document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: "A",
        q2: "A",
        q3: "B",
        q4: "B",
        q5: "B",
        q6: "B",
        q7: "A",
        q8: "A",
        q9: "A",
        q10: "C",
        q11: "B",
        q12: "A",
        q13: "B",
        q14: "B",
        q15: "C",
        q16: "C",
        q17: "D",
        q18: "A",
        q19: "B",
        q20: "A",
        q21: "C",
        q22: "A",
        q23: "C",
        q24: "B",
        q25: "B",
        q26: "A",
        q27: "C",
        q28: "D",
        q29: "A",
        q30: "A",
        q31: 'A',
        q32: 'B',
        q33: 'C',
        q34: 'B',
        q35: 'A',
        q36: 'C',
        q37: 'B',
        q38: 'C',
        q39: 'A',
        q40: 'A',
        q41: 'B',
        q42: 'A',
        q43: 'A',
        q44: 'B',
        q45: 'A',
        q46: 'C',
        q47: 'A',
        q48: 'A',
        q49: 'A',
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