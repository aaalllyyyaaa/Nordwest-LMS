// calculate the total lecturer score
const scoreInputs = document.querySelectorAll('.score-input')
const totalScore = document.querySelector('.total-score')

function updateTotal() {
    let total = 0

    scoreInputs.forEach(function(input) {
        let score = Number(input.value) || 0
        const maxScore = Number(input.max)

        if (score < 0) score = 0
        if (score > maxScore) score = maxScore

        input.value = score
        total += score
    })

    totalScore.textContent = total
}

scoreInputs.forEach(function(input) {
    input.addEventListener('input', updateTotal)
})
