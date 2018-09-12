import {format} from 'date-fns'
const watch = require('tsc-watch/client');



module.exports = () => ({
  presets: [
    require("@babel/preset-stage-2"),
  ],
  plugins: [
    [require("@babel/plugin-proposal-class-properties"), { loose: true }],
    require("@babel/plugin-proposal-object-rest-spread"),
  ],
})

function lieu ({ville,pays}: geoinfo, rue: string) {
  return ville + " en " + pays + ( rue &&  rue.concat(" appartement b"))
}

function whois ({displayFirstName,displayLastName}: infoid) {
  return displayFirstName + " " + displayLastName
}

function dateEnString (uneDate?: Date){
  var frLocale = require('date-fns/locale/fr')
  var maDate = uneDate ? uneDate : new Date() 
  var result = format(maDate,'D MMMM YYYY',{locale: frLocale})
  return result
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
    ville: "Rionegro",
    pays: "Colombie",
    street: " 68 marshall street",
  }
}

const dataPatched: info = {
  ...data,...patch
}

function bonjour ({id,location, location:{street}} : info):string {
  const partie1 = "Bonjour " +whois(id) + ", je vous souhaite la bienvenue"
  const partie2 = "à " +lieu(location, street)
  const partie3 = "et vous êtes actuellement le " + dateEnString(new Date()) + ","
  const partie4 = "votre anniversaire est le " + dateEnString(id.birthdate)
return partie1 + " " + partie2 + " " + partie3 + " " + partie4 
}

console.log (bonjour(dataPatched))