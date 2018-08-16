// from: http://stackoverflow.com/a/1527820/11577
let getRandomInt = (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let unicorns = () => {
    let body = document.querySelector('body')
    // 1024 x 625 means 512 x 312 at retina pixel depth
    let src = '/assets/img/unicorn-kitty.jpg'
    let alt = 'Unicorn kitty in space'
    let maxLeft = window.innerWidth - 512
    let maxTop = window.innerHeight - 312
    let left = getRandomInt(0, maxLeft)
    let top = getRandomInt(0, maxTop)
    let styles = `position: absolute;left: ${left}px; top: ${top}px;`
    for (let i = 1; i < 11; i += 1) {
        let img = `<img src="${src}" alt="${alt}" style="${styles}">`
        body.insertAdjacentHTML('beforeend', img)
    }
}

export unicorns
