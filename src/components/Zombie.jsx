import React from 'react'
import '../App.css'


const initialFighters = 
[
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];
  
function Zombie() {


const [team, setTeam] = React.useState([])
const [money, setMoney] = React.useState(100)
const [fighters, setFighters] = React.useState(initialFighters)


function handleAddFighter(fighter) {
    const newTeam = structuredClone(team)
    newTeam.push(fighter)
    setTeam(newTeam)

}


function handleRemoveFighter(fighter) {
    const removeTeam = structuredClone(team)
    removeTeam.splice(fighter, 1)
    setTeam(team)
}




return <>

<h1>Zombie</h1>
<div className="myTeam">
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
            <button className="removeFromSquad" onClick={()=> handleRemoveFighter(fighter)}>Remove</button>
        </li>
    })}

</ul>
</div>
    {team.length === 0 ? <h2>Start choosing your team!</h2> : ""}
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