// open and close requires attention
const bookmarkButton = document.querySelector('.bookmark-button')
const attentionPanel = document.querySelector('.attention-panel')

bookmarkButton.addEventListener('click', function(event) {
    event.stopPropagation()
    attentionPanel.hidden = !attentionPanel.hidden
})

document.addEventListener('click', function(event) {
    if (!attentionPanel.hidden && !attentionPanel.contains(event.target)) {
        attentionPanel.hidden = true
    }
})

// show the message for functions that are not included in the mock-up
document.querySelectorAll('.unavailable').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault()
        alert('This function is not available in the mock-up.')
    })
})
