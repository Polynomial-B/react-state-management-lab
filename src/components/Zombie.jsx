import React from 'react'
import '../App.css'


const initialFighters = 
[
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: '../src/assets/medusa.png',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: '../src/assets/genie.png',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: '../src/assets/dark-elf.png',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: '../src/assets/orc.png',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: '../src/assets/phoenix.png',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: '../src/assets/elf.png',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: '../src/assets/dark-elf.png',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: '../src/assets/witch.png',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: '../src/assets/unicorn.png',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: '../src/assets/succubus.png',
    },
  ];



const initialValue = 0
const initialWealth = 100

function Zombie() {


const [team, setTeam] = React.useState([])
const [money, setMoney] = React.useState(initialWealth)
const [fighters, setFighters] = React.useState(initialFighters)
const [strength, setStrength] = React.useState(initialValue)
const [agility, setAgility] = React.useState(initialValue)



// let isMoney = true
// function insufficientFundsMessage() {
//     if (isMoney === false) {
//         return isMoney = true
//     } else {
//         return isMoney = false
//     }
// }


function handleAddFighter(fighter) {
    if(money >= fighter.price) {
    const newTeam = structuredClone(team)
    newTeam.push(fighter)
    setTeam(newTeam)
    setMoney(money - fighter.price)
    setAgility(agility + fighter.agility)
    setStrength(strength + fighter.strength)
    } else {
        // return insufficientFundsMessage()
        console.log("You have insufficient funds")
    }
}

function handleRemoveFighter(fighter, fighterIndex) {
    const removeTeam = structuredClone(team)
    removeTeam.splice(fighterIndex, 1)
    setTeam(removeTeam)
    setMoney(money + fighter.price)
    setAgility(agility - fighter.agility)
    setStrength(strength - fighter.strength)
    // return insufficientFundsMessage()
}

function handleRemoveAll() {
    setAgility(initialValue)
    setTeam([])
    setMoney(initialWealth)
    setStrength(initialValue)
}


return <>
<button onClick={handleRemoveAll}>Remove All</button>
{/* {!isMoney ? <h2>You don't have enough money!</h2> : ""} */}

<div className="myTeam">
{team.length === 0 ? <h2 className="myTeamEmpty">Start choosing your team!</h2> : ""}
<ul className="squadContainer">
    {team.map((fighter, index) => {
        return <li
            className="fighterCard"
            key={index}>
            <img src={fighter.img}/>
            <div className="fighterName">{fighter.name} </div>
            <div> £{fighter.price} </div>
            <div>Strength: {fighter.strength} </div>
            <div>Agility: {fighter.agility} </div>
            <button className="removeFromSquad" onClick={()=> handleRemoveFighter(fighter, index)}>Remove</button>
        </li>
    })}

</ul>
</div>
<h2>Strength: {strength}</h2> <h2>Agility: {agility}</h2>
<h2>Funds available: £{money}</h2>
<ul className="squadContainer">
    {fighters.map((fighter, index) => {
        return <li
            className="fighterCard"
            key={index}>
            <img src={fighter.img}/>
            <div className="fighterName">{fighter.name} </div>
            <div> £{fighter.price} </div>
            <div>Strength: {fighter.strength} </div>
            <div>Agility: {fighter.agility} </div>
            <button className="addToSquad" onClick={()=> handleAddFighter(fighter)}>Add</button>
        </li>
    })}

</ul>
</>
}


export default Zombie