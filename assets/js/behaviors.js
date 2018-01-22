import { LessonManager } from './lesson-manager.js'
import { Navigation } from './navigation.js'

function init() {
    let el = document.querySelector('#lesson')
    let nav = document.querySelector('#everything-that-is-not-a-lesson nav')

    let lm = new LessonManager(el, nav)
    let lesson = lm.getLessonFromURL()
    lm.set(lesson)

    // special case non-nav lessons (currently only 'colophon')
    Navigation.update(['colophon'].includes(lesson) ? '' : lesson)

    function gotoLesson(lesson) {
        document.querySelector('.fidget-spinner').classList.add('show')

        lm.set(lesson)

        window.history.pushState({}, '', lesson)

        // special case non-nav lessons (currently only 'colophon')
        Navigation.update(['colophon'].includes(lesson) ? '' : lesson)
    }

    // only intercept clicks on lesson links
    document.querySelector('body').addEventListener('click', (evt) => {
        if (evt.target.matches('a[data-lesson]')) {
            evt.preventDefault() // inside the condition to allow <a href> links to work

            gotoLesson(evt.target.dataset.lesson)
        }
    })

    // show/hide navigation on mobile
    document.querySelector('.hamburger').addEventListener('click', Navigation.toggleMenu)

    // enable left/right arrow navigation
    document.querySelector('body').addEventListener('keyup', (evt) => {
        let navLinkContainers = document.querySelectorAll('#lesson nav ul li')
        let navLink
        if (2 === navLinkContainers.length) {
            if (37 === evt.keyCode) {
                // left/previous
                navLink = navLinkContainers[0].querySelector('a')
            }
            else if (39 === evt.keyCode) {
                // right/next
                navLink = navLinkContainers[1].querySelector('a')
            }
            if (navLink) {
                gotoLesson(navLink.dataset.lesson)
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', init)
