/**
 * @requires ajax, markdown, hljs
 * @todo History API
 * @todo Fade out/in
 */

import { a as ajax } from './ajax.js'

const handleError = () => {} // no-op for now

const nonNavLessons = ['colophon']

function handleClick(evt) {
    if (evt.target.matches('a[data-lesson]')) {
        evt.preventDefault() // inside the condition to allow <a href> links to work
        document.querySelector('.fidget-spinner').classList.add('show')
        let lesson = evt.target.dataset.lesson
        fetchLesson(lesson).then(renderLesson).catch(handleError)
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

function init() {
    fetchLesson('intro').then(renderLesson).catch(handleError)
    // only intercept clicks in the <nav>
    document.querySelector('#everything-that-is-not-a-lesson').addEventListener('click', handleClick)
}

document.addEventListener('DOMContentLoaded', init)
