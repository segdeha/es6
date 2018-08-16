// from: http://stackoverflow.com/a/1527820/11577
let getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let unicorns = () => {
    console.log('yay unicorns!')
    let body = document.querySelector('body')
    // 1024 x 625 means 512 x 312 at retina pixel depth
    let src = '/es6/assets/img/unicorn-kitty.jpg'
    let alt = 'Unicorn kitty in space'
    let maxLeft = window.innerWidth - 512 + 100
    let maxTop = window.innerHeight - 312 + 75
    for (let i = 0; i < 100; i += 1) {
        let left = getRandomInt(-100, maxLeft)
        let top = getRandomInt(-75, maxTop)
        let styles = `position: absolute;left: ${left}px; top: ${top}px;width: 512px;height: 312px;`
        let img = `<img class="unicorn-kitty" src="${src}" alt="${alt}" style="${styles}">`
        setTimeout(() => {
            body.insertAdjacentHTML('beforeend', img)
        }, i * 100)
    }
}

export default unicorns
