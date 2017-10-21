import { LessonManager } from './lesson-manager.js'
import { Navigation } from './navigation.js'

function init() {
    let el = document.querySelector('#lesson')
    let nav = document.querySelector('#everything-that-is-not-a-lesson nav')

    let lm = new LessonManager(el, nav)
    let lesson = lm.getLessonFromURL()
    lm.enable(lesson)

    // special case non-nav lessons (currently only 'colophon')
    Navigation.update(['colophon'].includes(lesson) ? '' : lesson)

    // only intercept clicks in the <nav>
    document.querySelector('body').addEventListener('click', (evt) => {
        if (evt.target.matches('a[data-lesson]')) {
            evt.preventDefault() // inside the condition to allow <a href> links to work

            document.querySelector('.fidget-spinner').classList.add('show')

            let lesson = evt.target.dataset.lesson
            lm.enable(lesson)

            window.history.pushState({}, '', lesson)

            // special case non-nav lessons (currently only 'colophon')
            Navigation.update(nonNavLessons.includes(lesson) ? '' : lesson)
        }
    })
}

document.addEventListener('DOMContentLoaded', init)
