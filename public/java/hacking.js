document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q3: "c",
        q4: "a",
        q5: "b",
        q6: "b",
        q7: "b",
        q8: "a",
        q9: "a",
        q10: "c",
        q11: "b",
        q12: "c",
        q13: "b",
        q14: "a",
        q15: "c",
        q16: "a",
        q17: "b",
        q18: "b",
        q19: "a",
        q20: "a",
        q21: "b",
        q22: "a",
        q23: "b",
        q24: "b",
        q25: "a",
        q26: "a",
        q27: "a",
        q28: "a",
        q29: "b",
        q30: "a",
        q31: "a",
        q32: "c",
        q33: "a",
        q34: "a",
        q35: "b",
        q36: "b",
        q37: "a",
        q38: "c",
        q39: "b",
        q40: "b",
        q41: "a",
        q42: "b",
        q43: "b",
        q44: "a",
        q45: "b",
        q46: "b",
        q47: "a",
        q48: "b",
        q49: "b",
        q50: "b"
    };

    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of 50.`;
});   