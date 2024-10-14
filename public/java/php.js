document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'C',
        q2: 'D',
        q3: 'D',
        q4: 'D',
        q5: 'A',
        q6: 'A',
        q7: 'A',
        q8: 'B',
        q9: 'D',
        q10: 'A',
        q11: 'A',
        q12: 'A',
        q13: 'A',
        q14: 'A',
        q15: 'A',
        q16: 'A',
        q17: 'D',
        q18: 'B',
        q19: 'A',
        q20: 'A',
        q21: 'B',
        q22: 'A',
        q23: 'C',
        q24: 'C',
        q25: 'D',
        q26: 'B',
        q27: 'A',
        q28: 'D',
        q29: 'A',
        q30: 'D',
        q31: "A",
        q32: "B",
        q33: "D",
        q34: "C",
        q35: "A",
        q36: "A",
        q37: "A",
        q38: "D",
        q39: "A",
        q40: "A",
        q41: "D",
        q42: "A",
        q43: "A",
        q44: "D",
        q45: "B",
        q46: "A",
        q47: "A",
        q48: "A",
        q49: "D",
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