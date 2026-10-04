// update the reminder topic when a checkbox changes
const taskCheckbox = document.querySelector('.task-checkbox')
const registrationCheckbox = document.querySelector('.registration-checkbox')
const topicInput = document.querySelector('.reminder-topic')

function updateTopic() {
    if (taskCheckbox.checked && registrationCheckbox.checked) {
        topicInput.value = 'Task deadline and Examination registration'
    } else if (taskCheckbox.checked) {
        topicInput.value = 'Task deadline'
    } else if (registrationCheckbox.checked) {
        topicInput.value = 'Examination registration'
    } else {
        topicInput.value = ''
    }
}

taskCheckbox.addEventListener('change', updateTopic)
registrationCheckbox.addEventListener('change', updateTopic)
