/**
 * @requires ajax, markdown, hljs
 * @todo History API
 * @todo Fade out/in
 */

import { a as ajax } from './ajax.js'
import { PrevNextNav } from './next-prev.js'

let handleError = () => {} // no-op for now
let navLessons = (function () {
    let lessons = []
    let lessonLinks = document.querySelectorAll('#everything-that-is-not-a-lesson nav a[data-lesson]')
    lessonLinks.forEach((link) => {
        lessons.push(link.dataset.lesson)
    })
    return lessons
}())
let nonNavLessons = ['colophon']
let prevNext

function handleClick(evt) {
    if (evt.target.matches('a[data-lesson]')) {
        evt.preventDefault() // inside the condition to allow <a href> links to work
        document.querySelector('.fidget-spinner').classList.add('show')
        let lesson = evt.target.dataset.lesson
        fetchLesson(lesson).then(renderLesson).catch(handleError)
        window.history.pushState({}, '', lesson)
        // special case non-nav lessons (currently only 'colophon')
        updateNav(nonNavLessons.includes(lesson) ? '' : lesson)
    }
}

function fetchLesson(lesson) {
    return new Promise(function (resolve, reject) {
        ajax(`lessons/${lesson}.md`, function (xhr) {
            if (xhr.status < 400) {
                resolve(xhr.responseText)
            }
            else {
                reject('Bad request')
            }
        })
    })
}

function renderLesson(md) {
    const html = markdown.toHTML(md)
    const lesson = document.getElementById('lesson')
    lesson.classList.add('hide')
    setTimeout(() => {
        lesson.innerHTML = html
        // highlight only blocks of code (not inline code)
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
        })
        // scroll to the top
        window.requestAnimationFrame(() => {
            window.scrollTo(0, 0)
            lesson.classList.remove('hide')
            document.querySelector('.fidget-spinner').classList.remove('show')
            prevNext.render()
        })
    }, 150)
}

function updateNav(lesson) {
    // select the selected selection and unselect it
    const selected = document.querySelector('li.selected')
    selected && selected.classList.remove('selected')
    // select the newly selected selection
    const newlySelected = document.querySelector(`[data-lesson="${lesson}"]`)
    newlySelected && newlySelected.parentNode.classList.add('selected')
}

function getLessonFromURL() {
    let pieces = window.location.pathname.split('/')
    return pieces.length > 2 && navLessons.includes(pieces[2]) ? pieces[2] : 'intro'
}

function init() {
    let el = document.querySelector('#lesson')
    let nav = document.querySelector('#everything-that-is-not-a-lesson nav')
    // previous/next navigation class (a global var for now)
    prevNext = new PrevNextNav(el, nav)
    let lesson = getLessonFromURL()
    // render 'intro' unless the URL includes a lesson name (e.g., '/es6/variables')
    fetchLesson(lesson).then(renderLesson).catch(handleError)
    // special case non-nav lessons (currently only 'colophon')
    updateNav(nonNavLessons.includes(lesson) ? '' : lesson)
    // only intercept clicks in the <nav>
    document.querySelector('body').addEventListener('click', handleClick)
}

document.addEventListener('DOMContentLoaded', init)
