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

function lieu ({ville,pays}: geoinfo) {
  return ville + " en " + pays
}
function whois ({displayFirstName,displayLastName}: infoid) {
  return displayFirstName + " " + displayLastName
}

function dateEnString (uneDate?: Date){
  var frLocale = require('date-fns/locale/fr')
  var maDate = uneDate === undefined ? new Date() : uneDate 
  var result = format(
    maDate,
    'D MMMM YYYY',
    {locale: frLocale}
  )

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
    displayFirstName: "Mr",
    displayLastName: "Pinto",
    birthdate: new Date(2001,9,1),
  },
  location: {
    ville: "Niort",
    pays: "France",
    street: "13 Avenue de Paris",
  }
}

const patch: info = {
  id:{
    displayFirstName: "Mr",
    displayLastName: "Escobar",
    birthdate: new Date(1949,11,1),
  },
  location: { 
    ville: "Rionegro",
    pays: "Colombie",
    street: "13 marshall street",
  }
}

const dataPatched: info = {
  ...data,...patch
}

function bonjour (coordonnees : info):string {
  const partie1 = "Bonjour " +whois(coordonnees.id) + ", je vous souhaite la bienvenue"
  const partie2 = "à " +lieu(coordonnees.location)
  const partie3 = "et vous êtes actuellement le " + dateEnString(new Date(1988,9,27)) + ","
  const partie4 = "votre anniversaire est le " + dateEnString(coordonnees.id.birthdate)
return partie1 + " " + partie2 + " " + partie3 + " " + partie4 
}

console.log (bonjour(dataPatched))