/**
 * Create dynamic previous/next navigation
 */
class PrevNextNav {
    /**
     * @param <DOM Element> el Navigable element
     * @param <DOM Element> nav Navigation parent container
     */
    constructor(el, nav) {
        this.el = el
        this.nav = nav
    }

    _getPrevLesson() {
        let prev = this.nav.querySelector('.selected').previousElementSibling
        let prevLesson = prev && prev.querySelector('a').dataset.lesson || null
        let prevText = prev && prev.querySelector('a').innerHTML || null
        return { prevLesson, prevText }
    }

    _getNextLesson() {
        let next = this.nav.querySelector('.selected').nextElementSibling
        let nextLesson = next && next.querySelector('a').dataset.lesson || null
        let nextText = next && next.querySelector('a').innerHTML || null
        return { nextLesson, nextText }
    }

    render() {
        let { prevLesson, prevText } = this._getPrevLesson()
        let { nextLesson, nextText } = this._getNextLesson()
        prevText = `← ${prevText}`
        nextText = `${nextText} →`
        let prev = prevLesson && `<a data-lesson="${prevLesson}">${prevText}</a>` || ''
        let next = nextLesson && `<a data-lesson="${nextLesson}">${nextText}</a>` || ''
        let prevNextNav = document.createElement('DIV')
        prevNextNav.innerHTML = `<nav><ul><li>${prev}</li><li>${next}</li></ul></nav>`
        this.el.append(prevNextNav)
    }
}

export { PrevNextNav }
