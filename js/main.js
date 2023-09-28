window.document.addEventListener('DOMContentLoaded',main);

function main(){


    const canvas = window.document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = "./sprites/player.png";

    const fundo = new Image();
    fundo.src = './background/bg2.jpg';

    const metadado = {
        x: Math.floor(Math.random() * 400),
        y: 0,

        desenhar: function(){
            
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x,this.y,3,1.5);
        },
        mover: function(){

            this.y += 2 + 2;
        },
        randerizar: function(){

            this.desenhar();
            this.mover();
            
            if(this.y > 160){

                this.x = Math.floor(Math.random() * 400);
                this.y = Math.floor(Math.random() * 50 * -1);
                
            }
        }
    }

    const metadado2 = {
        x: Math.floor(Math.random() * 400),
        y: 0,

        desenhar: function(){
            
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x,this.y,3,1.5);
        },
        mover: function(){

            this.y += 2 + 2;
        },
        randerizar: function(){

            this.desenhar();
            this.mover();

            if(this.y > 160){

                this.x = Math.floor(Math.random() * 400);
                this.y = Math.floor(Math.random() * 40 * -1);
                
            }
        }
    }
    const metadado3 = {
        x: Math.floor(Math.random() * 400),
        y: 0,

        desenhar: function(){
            
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x,this.y,3,1.5);
        },
        mover: function(){

            this.y += 2 + 2;
        },
        randerizar: function(){

            this.desenhar();
            this.mover();

            if(this.y > 160){

                this.x = Math.floor(Math.random() * 400);
                this.y = Math.floor(Math.random() * 10 * -1);
                
            }
        }
    }

    const metadado4 = {
        x: Math.floor(Math.random() * 400),
        y: 0,

        desenhar: function(){
            
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x,this.y,3,1.5);
        },
        mover: function(){

            this.y += 2 + 2;
        },
        randerizar: function(){

            this.desenhar();
            this.mover();

            if(this.y > 160){

                this.x = Math.floor(Math.random() * 400);
                this.y = Math.floor(Math.random() * 30 * -1);
                
            }
        }
    }
    const metadado5 = {
        x: Math.floor(Math.random() * 400),
        y: 0,

        desenhar: function(){
            
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x,this.y,3,1.5);
        },
        mover: function(){

            this.y += 2 + 2;
        },
        randerizar: function(){

            this.desenhar();
            this.mover();

            if(this.y > 160){

                this.x = Math.floor(Math.random() * 400);
                this.y = Math.floor(Math.random() * 25 * -1);
                
            }
        }
    }



    var player = {

        x: 110,
        y: 110,

        desenhar: function(){
            ctx.drawImage(img,0,0,1600,1600,this.x,this.y,50,29);

        },
        disparar: function(){

            
        }
    }

    function background(){

        ctx.drawImage(fundo,0,0,3840,2160,0,0,canvas.width,canvas.height);
    
    }
    
    function arena(){
        
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    
    }

    let teclas = {
    
     ArrowLeft:{
      pressed: false
         
     },
        ArrowRight:{
        
            pressed: false
        }
    }
    
    

    function loop(){

        ctx.clearRect(0,0,600,600);
        arena();
        metadado.randerizar();
        metadado2.randerizar();
        metadado3.randerizar();
        metadado4.randerizar();
        metadado5.randerizar();
        player.desenhar();
        
        if(teclas.ArrowLeft.pressed){
        
            player.x -= 3.4;
            
        }else if(teclas.ArrowRight.pressed){
        
            player.x += 3.5;
        
        }

    requestAnimationFrame(loop);
    }
    loop();

    
    let ket_pressed = true;
    
    window.document.addEventListener('keydown',(event)=>{
    
    
        switch(event.key){
        
            case 'ArrowLeft':
                teclas.ArrowLeft.pressed = true;
                break;
            case 'ArrowRight':
                teclas.ArrowRight.pressed = true;
                break;
                
            default:
                console.log('Tecla invalida');
        
        }
    
    });
    
     window.document.addEventListener('keyup',(event)=>{
         
           switch(event.key){
        
            case 'ArrowLeft':
                teclas.ArrowLeft.pressed = false;
                break;
            case 'ArrowRight':
                teclas.ArrowRight.pressed = false;
                break;
                
            default:
                console.log('Tecla invalida');
        
        }
    
         
         
     });
    
}
