class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.rank = null;
    }
    getCount(){
        var PCref = database.ref("playerCount");
        PCref.on("value", function(data){
        playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    update(){
        var refPt = "players/player"+this.index;
        database.ref(refPt).set({
            'name' : this.name,
            'distance' : this.distance,
            'rank' : this.rank
        });
    }

    updateRank(index,rank){
        var uRank = "players/player"+index;
        database.ref(uRank).update({
            rank : rank
        });

    }

    static getPlayerInfo(){
        var PLref = database.ref("players");
        PLref.on("value", function(data){
            allPlayers = data.val();
        });
    }

    static  getCarsAtEnd(){
        database.ref("carsAtEnd").on("value", (data)=>{
            carsAtEnd = data.val();
        })
    }
    
    static updateCarsAtEnd(count){
        database.ref("/").update({
            carsAtEnd : count
        })
    }
}