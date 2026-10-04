// change the student card when a row is selected
const studentRows = document.querySelectorAll('.student-row')
const studentCards = document.querySelectorAll('.student-details')

studentRows.forEach(function(row, index) {
    row.addEventListener('click', function() {
        studentRows.forEach(function(item) {
            item.classList.remove('selected')
        })

        studentCards.forEach(function(card) {
            card.hidden = true
        })

        row.classList.add('selected')
        studentCards[index].hidden = false
    })
})
