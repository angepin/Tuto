import {format} from 'date-fns'



module.exports = () => ({
  presets: [
    require("@babel/preset-stage-2"),
  ],
  plugins: [
    [require("@babel/plugin-proposal-class-properties"), { loose: true }],
    require("@babel/plugin-proposal-object-rest-spread"),
  ],
})

const lieu = ({ville,pays}: geoinfo) => ville + " en " + pays;

const whois = ({displayFirstName,displayLastName}: infoid) => displayFirstName + " " + displayLastName;


const dateEnString = (uneDate?: Date) =>  {
  let frLocale = require('date-fns/locale/fr')
  let maDate = uneDate ? uneDate : new Date() 
  return format(maDate,'D MMMM YYYY',{locale: frLocale})
}

interface infoid {
    displayFirstName: string
    displayLastName: string
    birthdate: Date
}

interface info {
  id: infoid
  location: geoinfo 
}

interface geoinfo {
    ville: string
    pays: string
    street: string
}

const data: info = {
  id:{
    displayFirstName: "Angelo",
    displayLastName: "Pinto",
    birthdate: new Date(2001,9,1),
  },
  location: {
    ville: "Niort",
    pays: "France",
    street: " 13 Avenue de Paris",
  }
}

const patch: info = {
  id:{
    displayFirstName: "Magellan",
    displayLastName: "Fernand",
    birthdate: new Date(1480,1,3),
  },
  location: { 
    ville: "Porto",
    pays: "Portugal",
    street: " 15 Lordelo do Ouro",
  }
}

const dataPatched: info = {
  ...data,...patch
}

const bonjour = ( {id, location}:info) => {
  const partie1 = "Bonjour " +whois(id) + ", je vous souhaite la bienvenue"
  const partie2 = "à " +lieu(location)
  const partie3 = "et vous êtes actuellement le " + dateEnString(new Date()) + ","
  const partie4 = "votre anniversaire est le " + dateEnString(id.birthdate) + " et vous êtes mort"
  return partie1 + " " + partie2 + " " + partie3 + " " + partie4
}

console.log (bonjour(dataPatched))