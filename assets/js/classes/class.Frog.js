class Frog extends Entity{



    constructor(x, y, width, height, settings, name){

        //establecemos el sprite de la clase Frog
        let sprite = new Image()
        sprite.src = "assets/images/frog.png"

        //Extendemos Entity
        super(x, y, width, height, {is_sprite:true, sprite:sprite}, name)


        //propiedades adicionales
        this.starting_x = x
        this.starting_y = y
        this.lives = 6
        this.on_log = false
        this.log = -1
        this.log_data = {}
    }




    //reestablecemos la posicion de inicio
    __resetPosition(){
      this.x = this.starting_x
      this.y = this.starting_y
    }



    //actualizamos el Frog
    __updatePlayer(matrix, game_loop_var, log_array, frog_array){



      if(this.on_log){
        console.log(this.log)
        if(this.log.x == this.x && this.log.y == this.y){
          if(this.log.direction == "left"){
            console.log("LOG AUTO: Move left")
            this.x--
          }else{
            console.log("LOG AUTO: Move right")
            this.x++
          }
        }
        this.on_log = false
        this.log = {}
      }



      for (var i = 0; i < log_array.length; i++) {
        let log = log_array[i]

        if(this.__checkCollission(log)){
          this.on_log = true
          this.log = {x:log.x, y:log.y, direction:log.direction}
          break;
        }

      }



      if( matrix[this.y][this.x] == 4 ){

        if( !frog_array.find( x => { return( x.x == this.x && x.y == this.y ) }) ){
          frog_array.push( new Frog( this.x, this.y, this.width, this.height, {}, this.name ) )
        }
        this.__resetPosition()
      }



      // validamos si estamos encima del agua
      if( matrix[this.y][this.x] == 1 && !this.on_log ){
        this.lives--
        this.__resetPosition()
      }


      //se pierde y se opta por reiniciar el juego
      if(this.lives < 1){
        clearInterval(game_loop_var)
        if (confirm('¿Quieres jugar otra vez?')) {
          startGame()
          return;
        }
      }

      if(frog_array.length == 6){
        clearInterval(game_loop_var)
        if (confirm('Ganaste! ¿Quieres jugar otra vez?')) {
          startGame()
          return;
        }
      }
    }



}
