// Make HTML element canvas appear
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// size of canvas
canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

// background png
const image = new Image()
image.src = './img/Pellet Town.png'

// 4 side by side playerDown Image
const playerImage = new Image()
playerImage.src = './img/playerDown.png'

// Make background and player appear centered on screen 
image.onload = () => {
    c.drawImage(image, -750, -600)
    c.drawImage(
        
        // cropping
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
       
        // actual width and height of image rendered on screen
        canvas.width / 2 - playerImage.width / 4,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height,

    )
}

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case: 'w': 

            break
    }
})
