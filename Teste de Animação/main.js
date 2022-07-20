const canvas = document.getElementById('display_canvas')
const ctx = canvas.getContext('2d')

setCanvasSize()

function setCanvasSize() {
    window.requestAnimationFrame(setCanvasSize)
    if(window.innerHeight >= 600)
    {
        canvas.width = (800*window.innerHeight)/600
        canvas.height = window.innerHeight
    }
    else
    {
        canvas.width = 800
        canvas.height = 600
    }
}

alert('lore: nerd bombado')

const input = {
    up: false,
    left: false,
    down: false,
    right: false
}

window.addEventListener('keydown', (event) => {
    switch(event.key)
    {
        case 'w':
        case 'W':
        case 'ArrowUp':
            input.up = true
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            input.left = true
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            input.down = true
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            input.right = true
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch(event.key)
    {
        case 'w':
        case 'W':
        case 'ArrowUp':
            input.up = false
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            input.left = false
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            input.down = false
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            input.right = false
            break;
    }
})

var player = new Player({
    size: { x: 192, y: 288 },
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
})

function framing()
{
    window.requestAnimationFrame(framing)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}

framing()
