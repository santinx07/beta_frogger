class Entity{

  // creamos el constructor de Entity
    constructor( x, y, width, height, settings = {}, name = "entity" ){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.name = name

        this.settings = { color:"red", is_sprite:false, sprite:"" }
        Object.assign( this.settings, settings )

    }


    // renderizamos Entity
    __render(ctx){

        let offset_x = this.x * this.width
        let offset_y = this.y * this.height


        if(this.settings.is_sprite){
            ctx.drawImage(
                this.settings.sprite,
                offset_x, offset_y , this.width, this.height
            )
            return;
        }

        ctx.fillStyle = this.settings.color
        ctx.fillRect(offset_x, offset_y, this.width, this.height)

    }


    //revisamos si colisionamos con algo
    __checkCollission(entity){
      if(entity.x == this.x && entity.y == this.y){
        return true
      }
      return false
    }



}
