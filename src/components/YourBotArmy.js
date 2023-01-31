import React from "react";
import BotCard from "./BotCard";
import { useState } from "react";

function YourBotArmy({chosenBots, onBotRemoved}) {
  let listChosenBots = <></>

  console.log(chosenBots)

  

  if(chosenBots.length > 0){
    listChosenBots = chosenBots.map((elem, ind)=>{
      return(
        <BotCard bot={elem[0]} key={ind} handleRetireBot={handleRemoveBot}></BotCard>
      )
    })
  }

  function handleRemoveBot(bot){
    console.log(bot)
    onBotRemoved(bot)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {listChosenBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
