document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = {
        Q1: 'B',
        Q2: 'B',
        Q3: 'A',
        Q4: 'A',
        Q5: 'D',
        Q6: 'A',
        Q7: 'A',
        Q8: 'A',
        Q9: 'B',
        Q10: 'B',
        Q11: 'A',
        Q12: 'D',
        Q13: 'B',
        Q14: 'D',
        Q15: 'C',
        Q16: 'A',
        Q17: 'B',
        Q18: 'D',
        Q19: 'D',
        Q20: 'A',
        Q21: 'A',
        Q22: 'B',
        Q23: 'B',
        Q24: 'A',
        Q25: 'A',
        Q26: 'B',
        Q27: 'D',
        Q28: 'A',
        Q29: 'D',
        Q30: 'A',
        q31: 'A',
        q32: 'A',
        q33: 'D',
        q34: 'A',
        q35: 'A',
        q36: 'A',
        q37: 'D',
        q38: 'A',
        q39: 'B',
        q40: 'A',
        q41: 'A',
        q42: 'A',
        q43: 'A',
        q44: 'D',
        q45: 'C',
        q46: 'A',
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