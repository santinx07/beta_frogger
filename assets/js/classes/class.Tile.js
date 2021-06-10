class Tile extends Entity{

    constructor(x, y, width, height, type){

        // Define the type of tile
        super(x, y, width, height, type, { is_sprite:true, sprite: "" } )
        this.__setType(type)
    }

    // renderizamos el tile
    __renderTile(ctx){
        let offset_x = this.x * this.width
        let offset_y = this.y * this.height

        // eligimos el estilo
        ctx.strokeStyle = "white"
        ctx.strokeRect(offset_x, offset_y, this.width, this.height)

    }


    // ponemos las texturas del mapa
    __setType(type){

        let img = new Image()

        switch(type){
            case 0:
                img.src = "assets/images/textures/road.jpg"
            break;

            case 1:
                img.src = "assets/images/textures/water.jpg"
            break;

            case 2:
                img.src = "assets/images/textures/grass.jpg"
            break;

            case 3:
                img.src = "assets/images/textures/safe zone.jpg"
            break;

            case 4:
                img.src = "assets/images/textures/water.jpg"
            break;
        }

        this.settings.sprite = img
        this.settings.is_sprite = true

    }





}
