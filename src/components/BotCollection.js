import React from "react";
import BotSpecs from "./BotSpecs";
import BotCard from "./BotCard";

function BotCollection({allBots, onBotEnlisted}) {
  // Your code here

  function handleEnlistBot(botId){
    onBotEnlisted(botId)
  }

  const showBots = allBots.map((elem, ind)=>{
    return(
     <BotSpecs bot={elem} key={ind} onBotEnlist={handleEnlistBot}/>
    )
  })
  

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {showBots}
      </div>
    </div>
  );
}

export default BotCollection;
