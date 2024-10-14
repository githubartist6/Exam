document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'B',
        q2: 'A',
        q3: 'D',
        q4: 'C',
        q5: 'D',
        q6: 'A',
        q7: 'D',
        q8: 'B',
        q9: 'D',
        q10: 'A',
        q11: 'B',
        q12: 'B',
        q13: 'A',
        q14: 'C',
        q15: 'B',
        q16: 'B',
        q17: 'C',
        q18: 'B',
        q19: 'B',
        q20: 'A',
        q21: 'B',
        q22: 'A',
        q23: 'A',
        q24: 'D',
        q25: 'B',
        q26: 'B',
        q27: 'A',
        q28: 'D',
        q29: 'C',
        q30: 'B',
        q31: "B",
        q32: "C",
        q33: "C",
        q34: "B",
        q35: "C",
        q36: "D",
        q37: "A",
        q38: "A",
        q39: "D",
        q40: "A",
        q41: "A",
        q42: "B",
        q43: "B",
        q44: "D",
        q45: "B",
        q46: "B",
        q47: "D",
        q48: "A",
        q49: "C",
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
