# Colophon

Once upon a time, before obfuscators, transpilers, and minifiers, the web was made of plain old HTML, CSS, and JavaScript. One of the things this facilitated was learning. New to web development? No problem! Just view source on a page that did something akin to what you needed to do and learn by example.

This site uses some cutting-edge JavaScript features, but is in many ways an homage to the web of old. View source to your heart’s content and, hopefully, learn by example.

## Architecture

The way the site works is to fetch [Markdown](https://daringfireball.net/projects/markdown/syntax) files via [Ajax](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/), convert them to HTML, add the HTML to the DOM, then apply syntax highlighting.

The big advantage of this approach is that it means I can keep the actual lessons in simple text files and edit them using [MacDown](http://macdown.uranusjr.com).

I love that the site is fewer than 70 lines of HTML, 140 lines of CSS, and 70 lines of JavaScript. The focus is on the content, as it should be.

The disadvantages of this approach are that you can’t link directly to a particular lesson (at least right now; I may add that in the future using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)) and that Markdown syntax lacks the ability to do things like add `data` attributes to anchor tags, which would have been handy.

I used [Panic’s Coda](https://panic.com/coda/) as my IDE for coding the site. It lacks many [features of serious IDEs](https://www.jetbrains.com/webstorm/features/), but is great for simple sites like this one.

The [animated fidget spinner loading icon](https://loading.io/spinner/fidget-spinner/-fidget-spinner) comes from [loading.io](https://loading.io).

### Libraries used

- [Markdown parser](https://github.com/cadorn/markdown-js)
- [Ajax in 120 characters](https://gist.github.com/segdeha/5601610) (modified slightly to behave as a module)
- [Syntax highlighter](https://highlightjs.org/)

## ES7 Features Used

### `Array.prototype.includes`

From `behaviors.js`:

    // special case non-nav lessons (currently only 'colophon')
    updateNav(nonNavLessons.includes(lesson) ? '' : lesson)

## ES6 Feautres Used

### Modules

I make use of modules to import a simple Ajax function.

From the `<head>` element in `index.html`:

    <script defer type="module" src="assets/js/ajax.js"></script>
    <script defer type="module" src="assets/js/behaviors.js"></script>

From `ajax.js`:

    // ajax in 120 characters from https://gist.github.com/segdeha/5601610
    function a(u,c){…}

    // insta-module, voilá
    export { a }

From `behaviors.js`:

    import { a as ajax } from './ajax.js'

### Arrow functions

From `behaviors.js`:

    const handleError = () => {} // no-op for now

    document.querySelectorAll('pre code').forEach((block) => {…})

### Template literals

From `behaviors.js`:

    ajax(`lessons/${lesson}.md`, function (xhr) {…})

    document.querySelector(`[data-lesson="${lesson}"]`).parentNode
        .classList.add('selected')

## ES5 Features Used

Additionally, this site makes use of some features from the previous version of ECMAScript that make it so [you might not need jQuery](http://youmightnotneedjquery.com/).

From `behaviors.js`:

### `Node.matches`

    if (evt.target.matches('a[data-lesson]')) {…}

### `Promise`

    return new Promise(function (resolve, reject) {…})

    fetchLesson('intro').then(renderLesson).catch(handleError)

### `querySelectorAll` & `NodeList.forEach`

    document.querySelectorAll('pre code').forEach((block) => {…})

### `querySelector` & `classList`

    const newlySelected = document.querySelector(`[data-lesson="${lesson}"]`)
    newlySelected && newlySelected.parentNode.classList.add('selected')

N.B.: It’s technically a CSS 2.1 feature, but the above example also makes uses of attribute selectors.
