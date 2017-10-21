/**
 * Navigation
 */
export class Navigation {
    static update(lesson) {
        let baseElement = document.querySelector('#everything-that-is-not-a-lesson nav')
        // select the selected selection and unselect it
        let selected = baseElement.querySelector('li.selected')
        if (selected) {
            selected.classList.remove('selected')
            // select the newly selected selection
            let newlySelected = baseElement.querySelector(`[data-lesson="${lesson}"]`)
            if (newlySelected) {
                newlySelected.parentNode.classList.add('selected')
            }
        }
    }
}
