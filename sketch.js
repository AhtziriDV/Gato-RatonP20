var canvas,bg;
var tom, tomImg1,tomImg2, tomImg3;
var jerry, jerryImg1,jerryImg2, jerryImg3;

function preload() {
    //carga la imagen del fondo 
    bg = loadImage("garden.png");

    //carga las animaciones de tom y jerry
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");

}

function setup(){
    //area juego 1000 x 800
    canvas = createCanvas(1000,800);


    //crea un sprite para tom y agrega su animacion y escala
   

    //crea un sprite para jerry y agrega su animacion y escala
   

}

function draw() {
    //coloca dentro de background la variable bg que contiene imagen de fondo cargada en preload
    background("blue");

    //usa la condicion de colision vista en clase para detectar cuando tom y jerry se tocan
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        //velocidad de tom se cambia a 0
       

        //cambia animacion de tom y da escala
       

        //cambia animacion de jerry y da escala
       
    }  

    drawSprites();
}


function keyPressed(){
    //si se presiona tecla flecha izquierda
    if(keyCode === LEFT_ARROW){
        //tom se empieza a mover a la izquierda y cambiar animacion
        
        
        //jerry cambiar animacion
      

    }
}