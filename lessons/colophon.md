# Colophon

Once upon a time, before obfuscators, transpilers, and minifiers, the web was made of plain old HTML, CSS, and JavaScript. One of the things this facilitated was learning. New to web development? No problem! Just view source on a page that did something akin to what you needed to do and learn by example.

This site uses some cutting-edge JavaScript features, but is in many ways an homage to the web of old. View source to your heart’s content and, hopefully, learn by example.

## Architecture

The way the site works is to fetch [Markdown](https://daringfireball.net/projects/markdown/syntax) files via [Ajax](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/), convert them to HTML, add the HTML to the DOM, then apply syntax highlighting.

The big advantage of this approach is that it means I can keep the actual lessons in simple text files and edit them using [MacDown](http://macdown.uranusjr.com). A bonus of using Markdown files is that you can easily [read the lessons from the GitHub repo](https://github.com/segdeha/es6/tree/master/lessons)!

I love that the site is just a couple hundred lines of un-minified HTML, CSS, and JavaScript. The focus is on the content, as it should be.

The main disadvantage of this approach is that Markdown syntax lacks the ability to do things like add `data` attributes to anchor tags, which would have been handy.

I used [Panic’s Coda](https://panic.com/coda/) as my IDE for coding the site. It lacks many [features of serious IDEs](https://www.jetbrains.com/webstorm/features/), but is great for simple sites like this one.

The [animated fidget spinner loading icon](https://loading.io/spinner/fidget-spinner/-fidget-spinner) comes courtesy of [loading.io](https://loading.io). The hamburger menu icon comes courtesy of [flaticon.com](https://www.flaticon.com/free-icon/burger_597935).

### Libraries used

- [Markdown parser](https://github.com/cadorn/markdown-js)
- [Syntax highlighter](https://highlightjs.org)
- [Ajax in 120 characters](https://gist.github.com/segdeha/5601610) (modified slightly to behave as a module)

## ES8 Features Used

### `acync` & `await`

From `lesson-manager.js`:

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

    async set(lesson) {
        let md = await this.fetch(lesson)
        this.render(md)
    }

## ES7 Features Used

### `Array.prototype.includes`

From `behaviors.js`:

    // special case non-nav lessons (currently only 'colophon')
    Navigation.update(['colophon'].includes(lesson) ? '' : lesson)

## ES6 Feautres Used

### Modules

I make use of modules to import classes asynchronously.

From the `<head>` element in `index.html`:

    <script defer type="module" src="assets/js/behaviors.js"></script>

From `behaviors.js`:

    import { LessonManager } from './lesson-manager.js'
    import { Navigation } from './navigation.js'

From `lesson-manager.js`:

    import { a as ajax } from './ajax.js'
    import { PrevNextNav } from './prev-next.js'

### Classes

I created 3 classes to encapsulate certain functionality.

From `lesson-manager.js`:

    export class LessonManager {
        constructor() {…}
        getLessonFromURL() {…}
        async fetch(lesson) {…}
        render(md) {…}
        async set(lesson) {…}
    }

From `prev-next.js`:

    export class PrevNextNav {
        constructor() {…}
        getLesson(dir) {…}
        render() {}
    }

From `navigation.js`:

    export class Navigation {
        static update(lesson) {…}
    }

### Arrow functions

From `behaviors.js`:

    document.querySelector('body')
        .addEventListener('click', (evt) => {…})

From `lesson-manager.js`:

    return new Promise((resolve, reject) => {…})

    ajax(`lessons/${lesson}.md`, (xhr) => {…})

    setTimeout(() => {…})

    // highlight only blocks of code (not inline code)
    document.querySelectorAll('pre code')
        .forEach((block) => {…})

    // scroll to the top
    window.requestAnimationFrame(() => {…})

### Template literals

From `lesson-manager.js`:

    ajax(`lessons/${lesson}.md`, function (xhr) {…})

From `prev-next.js`:

    let el = this.nav
        .querySelector('.selected')[`${dir}ElementSibling`]

    let prev = prevLesson &&
        `<a data-lesson="${prevLesson}">← ${prevText}</a>` || ''
    let next = nextLesson &&
        `<a data-lesson="${nextLesson}">${nextText} →</a>` || ''

    prevNextNav.innerHTML = `
        <nav>
            <ul>
                <li>${prev}</li>
                <li>${next}</li>
            </ul>
        </nav>
    `

From `navigation.js`:

    // select the newly selected selection
    let newlySelected = baseElement
        .querySelector(`[data-lesson="${lesson}"]`)

## ES5 Features Used

Additionally, this site makes use of some features from the previous version of ECMAScript that make it so [you might not need jQuery](http://youmightnotneedjquery.com/).

### `Promise`

From `lesson-manager.js`:

    return new Promise(function (resolve, reject) {…})

### `querySelectorAll` & `NodeList.forEach`

From `lesson-manager.js`:

    document.querySelectorAll('pre code').forEach((block) => {…})

### `querySelector` & `classList`

From `lesson-manager.js`:

    document.querySelector('.fidget-spinner').classList.remove('show')

### `Node.matches`

From `behaviors.js`:

    if (evt.target.matches('a[data-lesson]')) {…}

N.B.: It’s technically a CSS 2.1 feature, but the above example also makes uses of [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).
