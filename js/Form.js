class Form{
constructor(){
    this.input = createInput("Enter Name");
    this.button = createButton("PLAY");
    this.title = createElement("h2");
    this.greeting = createElement("h3");
    this.reset = createButton("RESET");
}

display(){
    this.title.html("Car Racing");
    this.title.position(displayWidth/2-50,0);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value(); // the text inside ur Input obj will n=be stored into particular prop or var
        playerCount++;
        player.index = playerCount;

        player.update();
        player.updateCount(playerCount);

        this.greeting.position(displayWidth/2-70,displayHeight/4);
        this.greeting.html("Hello "+ player.name);
    })

    this.reset.mousePressed(()=>{
        game.updateState(0);
        player.updateCount(0);
        var plrRef =  database.ref("players"); 
        plrRef.remove();

        database.ref("/").update({
            carsAtEnd : 0
        })
    })

}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}

}