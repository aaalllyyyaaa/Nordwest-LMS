// switch between material tabs
const materialTabs = document.querySelectorAll('.material-tab')
const materialPanels = document.querySelectorAll('.materials-panel')

materialTabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        materialTabs.forEach(function(button) {
            button.classList.remove('active')
        })

        materialPanels.forEach(function(panel) {
            panel.hidden = true
        })

        tab.classList.add('active')
        materialPanels[index].hidden = false
    })
})
