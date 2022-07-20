class Player
{
    constructor({size, position, velocity})
    {
        this.size = size
        this.position = position
        this.velocity = velocity
        
        this.img = new Image()
        this.frame = 1
        this.spritestate = 'down'
        this.frameSpan = 0
        this.frameLimit = 10

        this.img.src = ('img/player_'+this.spritestate+'1.png')
        
    }
    render()
    {
        ctx.fillStyle = 'blue'
        ctx.drawImage(this.img, 0, 0, 96, 144, this.position.x, this.position.y, this.size.x, this.size.y)
    }
    update()
    {
        this.render()
        
        //física\\
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        //física\\

        //controles\\
        if(input.up)
        {
            if(this.velocity.y > -10){
                this.velocity.y += -5
              }
        }
        if(input.down)
        {
            if(this.velocity.y < 10){
                this.velocity.y += 5
              }
        }
        if(!input.up && !input.down)
        {
            this.velocity.y = 0
        }

        if(input.left)
        {
            if(this.velocity.x > -10){
              this.velocity.x += -5
            }
        }
        if(input.right)
        {
            if(this.velocity.x < 10){
                this.velocity.x += 5
              }
        }
        if(!input.left && !input.right)
        {
            this.velocity.x = 0
        }
        //controles\\

        //animação\\

        this.img.src = 'img/player_'+this.spritestate+this.frame+'.png'

        if(this.velocity.x < 0)
        {
            this.spritestate = 'left'
        }
        else if(this.velocity.x > 0)
        {
            this.spritestate = 'right'
        }

        if(this.velocity.y < 0)
        {
            this.spritestate = 'up'
        }
        else if(this.velocity.y > 0)
        {
            this.spritestate = 'down'
        }

        this.frameSpan++
        if (this.frameSpan % this.frameLimit == 0) 
        {
            if (this.velocity.x != 0 | this.velocity.y != 0) {
                console.log(this.img.src)
                if (this.frame < 3) {
                    this.frame++
                }
                else {
                    this.frame = 0
                }
            }
            else if (this.velocity.x == 0 && this.velocity.y == 0) {
                this.frame = 1
                this.frameSpan = 0
            }
        }

        if(this.frameSpan > 100){this.frameSpan = 0}

        //animação\\
    }
}