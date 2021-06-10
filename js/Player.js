class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.xPos = 0;
    this.place=0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      place:this.place,
      xPos: this.xPos
    });
  }

  getFinishedPlayers(){
    var finishedPlayerRef=database.ref('finishedPlayer');
  finishedPlayerRef.on("value",(data)=>{
    finishedPlayer=data.val();
  })
  }

  static updateFinishedPlayers(){
    database.ref('/').update({
      finishedPlayer:finishedPlayer+1
    });
    this.place+=1;
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}