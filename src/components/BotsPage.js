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


  function handleBotEnlistArmy(bot){
    console.log(bot)
    const listedbot = bots.filter((elem)=>{
      return(
        elem.id == bot.id
      )
    })
    console.log(listedbot)
    setEnlistedbots([listedbot, ...enlistedBots])
  }

  

  function handleUnlistBot(bot){
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
