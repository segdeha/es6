/**
 * LessonManager
 */

import { a as ajax } from './ajax.js'
import { PrevNextNav } from './prev-next.js'

export class LessonManager {
    constructor(el, nav) {
        this.prevNext = new PrevNextNav(el, nav)
    }

    getLessonFromURL() {
        let navLessons = (function () {
            let lessons = []
            let lessonLinks = document.querySelectorAll('#everything-that-is-not-a-lesson a[data-lesson]')
            lessonLinks.forEach((link) => {
                lessons.push(link.dataset.lesson)
            })
            return lessons
        }())
        let pieces = window.location.pathname.split('/')
        return pieces.length > 2 && navLessons.includes(pieces[2]) ? pieces[2] : 'intro'
    }

    async fetch(lesson) {
        return new Promise((resolve, reject) => {
            ajax(`lessons/${lesson}.md`, (xhr) => {
                if (xhr.status < 400) {
                    resolve(xhr.responseText)
                }
                else {
                    reject('Bad request')
                }
            })
        })
    }

    // pre-fetch the next lesson (if there is one)
    // note: we aren’t doing anything with the result
    // other than relying on native browser caching
    async preFetch() {
        let nextLesson = this.prevNext.getLesson('next')
        let md = await this.fetch(nextLesson.lesson)
    }

    render(md) {
        let html = markdown.toHTML(md)
        let lessonContainer = document.getElementById('lesson')
        lessonContainer.classList.add('hide')

        // wait until old lesson has faded out
        setTimeout(() => {
            // replace with new lesson’s html
            lessonContainer.innerHTML = html

            // highlight only blocks of code (not inline code)
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block)
            })

            // on next paint
            window.requestAnimationFrame(() => {
                // scroll to the top
                window.scrollTo(0, 0)

                // fade-in the lesson
                lessonContainer.classList.remove('hide')
                // fade-out the loading spinner
                document.querySelector('.fidget-spinner').classList.remove('show')

                // display the prev/next nav
                this.prevNext.render()
            })
        }, 150)
    }

    async set(lesson) {
        let md = await this.fetch(lesson)
        this.render(md)
        this.preFetch()
    }
}
