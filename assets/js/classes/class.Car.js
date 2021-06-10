class Car extends Entity{


    constructor(x, y, width, height, direction = "right", name = "Carro"){

      let sprite = new Image()

      if(direction == "right"){
        sprite.src = "assets/images/car_right (2).png"
      }else{
        sprite.src = "assets/images/car_left.png"
      }


      super(x, y, width, height, { is_sprite:true, sprite:sprite })
      this.direction = direction
    }


    __updateCar(tile_count, player){

      //validamos la direccion
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


      //validamos colision con el jugador
      if (player.__checkCollission(this)) {
        player.lives --
        player.__resetPosition()
      }


    }


}
