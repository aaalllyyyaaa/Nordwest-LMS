// show and hide the third course
const showMoreButton = document.querySelector('.show-more-button')
const extraCourse = document.querySelector('.extra-course')

showMoreButton.addEventListener('click', function() {
    extraCourse.hidden = !extraCourse.hidden
    showMoreButton.textContent = extraCourse.hidden ? 'show more' : 'show less'
})

// switch between timetable and calendar
const timetableTab = document.querySelector('.timetable-tab')
const calendarTab = document.querySelector('.calendar-tab')
const timetableView = document.querySelector('.timetable-view')
const calendarView = document.querySelector('.calendar-view')

timetableTab.addEventListener('click', function() {
    timetableView.hidden = false
    calendarView.hidden = true
    timetableTab.classList.add('active')
    calendarTab.classList.remove('active')
})

calendarTab.addEventListener('click', function() {
    timetableView.hidden = true
    calendarView.hidden = false
    timetableTab.classList.remove('active')
    calendarTab.classList.add('active')
})

// show timetable event details
const timetablePanel = timetableView.querySelector('.planner-panel')
const meetingEvent = document.querySelector('.meeting-event')
const computerScienceEvent = document.querySelector('.computer-science-event')
const pythonEvent = document.querySelector('.python-event')

meetingEvent.addEventListener('click', function() {
    timetablePanel.querySelector('.panel-event-name').textContent = 'Meeting'
    timetablePanel.querySelector('.panel-event-date').textContent = '07 September 2026'
    timetablePanel.querySelector('.panel-event-time').textContent = '7:15–7:35'
    timetablePanel.querySelector('.panel-event-context').textContent = 'Lecturer meeting'
    timetablePanel.hidden = false
    timetableView.classList.add('with-panel')
})

computerScienceEvent.addEventListener('click', function() {
    timetablePanel.querySelector('.panel-event-name').textContent = 'CS lecture'
    timetablePanel.querySelector('.panel-event-date').textContent = '07 September 2026'
    timetablePanel.querySelector('.panel-event-time').textContent = '8:00–9:00'
    timetablePanel.querySelector('.panel-event-context').textContent = 'Computer Science'
    timetablePanel.hidden = false
    timetableView.classList.add('with-panel')
})

pythonEvent.addEventListener('click', function() {
    timetablePanel.querySelector('.panel-event-name').textContent = 'Python lecture'
    timetablePanel.querySelector('.panel-event-date').textContent = '09 September 2026'
    timetablePanel.querySelector('.panel-event-time').textContent = '7:30–9:00'
    timetablePanel.querySelector('.panel-event-context').textContent = 'Python Introduction'
    timetablePanel.hidden = false
    timetableView.classList.add('with-panel')
})

timetablePanel.querySelector('.close-panel-button').addEventListener('click', function() {
    timetablePanel.hidden = true
    timetableView.classList.remove('with-panel')
})

// show calendar actions for the selected date
const calendarPanel = calendarView.querySelector('.planner-panel')
const calendarDays = document.querySelectorAll('.calendar-day.selectable')
const meetingAction = calendarPanel.querySelector('.meeting-action')
const computerScienceAction = calendarPanel.querySelector('.computer-science-action')
const pythonAction = calendarPanel.querySelector('.python-action')
const calendarEmpty = calendarPanel.querySelector('.calendar-empty')

calendarDays.forEach(function(day) {
    day.addEventListener('click', function() {
        calendarDays.forEach(function(cell) {
            cell.classList.remove('selected')
        })

        day.classList.add('selected')

        let dayNumber = day.querySelector('span').textContent.trim()
        if (dayNumber.length === 1) {
            dayNumber = '0' + dayNumber
        }
        calendarPanel.querySelector('.calendar-selected-date').textContent = dayNumber + ' September 2026'

        meetingAction.hidden = true
        computerScienceAction.hidden = true
        pythonAction.hidden = true
        calendarEmpty.hidden = true

        if (day.classList.contains('meeting-day')) {
            meetingAction.hidden = false
            computerScienceAction.hidden = false
        } else if (day.classList.contains('python-day')) {
            pythonAction.hidden = false
        } else {
            calendarEmpty.hidden = false
        }

        calendarPanel.hidden = false
        calendarView.classList.add('with-panel')
    })
})

calendarPanel.querySelector('.close-panel-button').addEventListener('click', function() {
    calendarPanel.hidden = true
    calendarView.classList.remove('with-panel')
})
