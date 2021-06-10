class Log extends Entity{

  // creamos el constructor del log
    constructor(x, y, width, height, direction = "right", speed = 0.04 ){
        let sprite = new Image()
        sprite.src = "assets/images/descarga_.png"
        super(x, y, width, height, {is_sprite: true, sprite:sprite})
        this.direction = direction
        this.speed = speed
    }

    // actualizamos el log
    __updateLog(tile_count, player){

      if(this.direction == "right"){

        this.x++
        if(this.x > tile_count){
          this.x = -Math.floor(Math.random()*5)
        }

      }else{

        this.x--
        if(this.x < 0){
          this.x = tile_count + Math.floor(Math.random() * 5)
        }

      }


    }


}
