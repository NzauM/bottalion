import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect, useState } from "react";

function BotsPage() {
  //start here with your code for step one

  const[bots, setBots] = useState([])
  const[enlistedBots, setEnlistedbots] = useState([])


  useEffect(()=>{
    fetch("http://localhost:8002/bots").then((resp)=>resp.json()).then((res)=>setBots(res))
  },[])


  function handleBotEnlistArmy(botId){
    console.log("Tushapata" + botId)
    const listedbot = bots.filter((elem)=>{
      // console.log(elem)
      return(
        elem.id == botId 
      )
    })
    console.log(listedbot)
    setEnlistedbots([listedbot, ...enlistedBots])
  }

  

  function handleUnlistBot({bot}){
    // console.log(bot.id)
    // console.log(enlistedBots);
    const newlistedbots = enlistedBots.filter((elem)=>{
      console.log(elem)
      return(
        elem[0].id !== bot.id
      )
    }
    )
    console.log(newlistedbots)
    setEnlistedbots(newlistedbots)
  }

  console.log(enlistedBots)




  return (
    <div>
      <YourBotArmy onBotRemoved={handleUnlistBot} chosenBots = {enlistedBots}/>
      <BotCollection  allBots={bots} onBotEnlisted={handleBotEnlistArmy}/>
    </div>
  )
}

export default BotsPage;
