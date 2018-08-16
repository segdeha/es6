export class Konami {
    constructor(callback) {
        if (typeof callback !== 'function') {
            console.warn('Required parameter `callback` is not a function')
        }
        let noop = () => {}
        this.callback = callback || noop
        this.konami = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']
        this.keyMap = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            65: 'a',
            66: 'b'
        }
        this.sequence = []
        this.trackSequence = this.trackSequence.bind(this)
        this.addEventListener()
    }
    
    trackSequence(evt) {
        let keystroke = this.keyMap[evt.keyCode]

        // if current keystroke is not in the key map, reset the sequence
        if (!keystroke) {
            this.sequence = []
            return
        }

        // add the keystroke to the sequence
        this.sequence.push(keystroke)

        // if the sequence is konami, trigger the callback
        if (this.isKonami()) {
            this.sequence = []
            this.callback()
            return
        }

        // if our sequence so far + the incoming keystroke
        // has the potential to match konami, keep it
        // otherwise, reset the sequence
        for (let i = 0; i < this.sequence.length; i += 1) {
            if (this.sequence[i] !== this.konami[i]) {
                this.sequence = []
                return
            }
        }
    }
    
    addEventListener() {
        document
            .querySelector('body')
            .addEventListener('keyup', this.trackSequence)
    }

    isKonami() {
        return this.sequence.join(',') === this.konami.join(',')
    }
}
