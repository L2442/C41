class Game{
    constructor(){
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(count){
        database.ref("/").update({
            gameState : count
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);
        car2 = createSprite(300,200);
        car2.addImage(car2Img);
        car3 = createSprite(500,200);
        car3.addImage(car3Img);
        car4 = createSprite(700,200);
        car4.addImage(car4Img);
        cars=  [car1,car2,car3,car4];
    }

    play(){
      form.hide();

      Player.getPlayerInfo();
      Player.getCarsAtEnd();
        background(groundImg);
      image(trackImg,0,-displayHeight*4, displayWidth, displayHeight*5);

      if(allPlayers !== undefined){
          var index = 0;
          var x = 175;
          var y = 0;
          
          
         for(var plr in allPlayers){
          x = x+200;            
          y = displayHeight - allPlayers[plr].distance;
          
          console.log(plr +":"+ y);

          cars[index].x = x;
          cars[index].y = y;         
          
          if(index+1 == player.index){
              cars[index].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index].y;
              fill("red");
              ellipse(x,y,60,60);
          }
          index++;

        }
        
      }

      if(player.distance >=3750 ){
         player.rank = carsAtEnd+1; 
         Player.updateCarsAtEnd(player.rank);
         player.updateRank(player.index,player.rank)
         gameState = 2;
      }
      if(keyDown(UP_ARROW) && player.index !== null){
        player.distance+=50;
        player.update();
      }
      drawSprites();
    }

    end(){
        console.log("Game ends");
        if(carsAtEnd ===4){
            background("white");
            camera.position.x = displayWidth/2 ;
            camera.position.y = displayHeight/2;
            textSize(25);
            var yPos = displayHeight/3 -100;
            for(var plr in allPlayers){
                text(allPlayers[plr].name+"  :  "+allPlayers[plr].rank,displayWidth/2-50,yPos);
                yPos+=50;
            }
        }
    }

}