/**
 * Create dynamic previous/next navigation
 */
export class PrevNextNav {
    /**
     * @param <DOM Element> el Navigable element
     * @param <DOM Element> nav Navigation parent container
     */
    constructor(el, nav) {
        this.el = el
        this.nav = nav
    }

    _getLesson(dir) {
        let el = this.nav.querySelector('.selected')[`${dir}ElementSibling`]

        let lesson = el && el.querySelector('a').dataset.lesson || null
        let text = el && el.querySelector('a').innerHTML || null

        return { lesson, text }
    }

    render() {
        let { lesson: prevLesson, text: prevText } = this._getLesson('previous')
        let { lesson: nextLesson, text: nextText } = this._getLesson('next')

        let prev = prevLesson && `<a data-lesson="${prevLesson}">← ${prevText}</a>` || ''
        let next = nextLesson && `<a data-lesson="${nextLesson}">${nextText} →</a>` || ''

        let prevNextNav = document.createElement('DIV')
        prevNextNav.innerHTML = `<nav><ul><li>${prev}</li><li>${next}</li></ul></nav>`

        this.el.append(prevNextNav)
    }
}
