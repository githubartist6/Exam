document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: "D",
        q2: "D",
        q3: "B",
        q4: "C",
        q5: "A",
        q6: "A",
        q7: "B",
        q8: "B",
        q9: "D",
        q10: "C",
        q11: "A",
        q12: "D",
        q13: "A",
        q14: "C",
        q15: "D",
        q16: "A",
        q17: "B",
        q18: "B",
        q19: "B",
        q20: "A",
        q21: "B",
        q22: "A",
        q23: "B",
        q24: "D",
        q25: "A",
        q26: "A",
        q27: "C",
        q28: "B",
        q29: "A",
        q30: "C",
        q31: 'B',
        q32: 'D',
        q33: 'B',
        q34: 'C',
        q35: 'B',
        q36: 'B',
        q37: 'A',
        q38: 'C',
        q39: 'B',
        q40: 'C',
        q41: 'A',
        q42: 'D',
        q43: 'B',
        q44: 'C',
        q45: 'D',
        q46: 'B',
        q47: 'A',
        q48: 'C',
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