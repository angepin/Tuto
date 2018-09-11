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
function whois ({displayFirstName,displayLastName}: info) {
  return displayFirstName + " " + displayLastName
}

function creeDate (){
  var frLocale = require('date-fns/locale/fr')
  var result = format(
    new Date(),
    'D MMMM YYYY',
    {locale: frLocale}
  )

  return result
}

interface info extends geoinfo {
  displayFirstName: string
  displayLastName: string
}

interface geoinfo {
  ville: string
  pays: string
}

const data: info = {
  displayFirstName: "Mr",
  displayLastName: "Pinto",
  ville: "Niort",
  pays: "France",
}

const patch: info = {
  displayFirstName: "Mr",
  displayLastName: "Escobar",
  ville: "Rionegro",
  pays: "Colombie"
}

const dataPatched: info = {
  ...data,...patch
}

function bonjour (coordonnees : info):string {
  const partie1 = "Bonjour " +whois(coordonnees) + ", je vous souhaite le bienvenue"
  const partie2 = "à " +lieu(coordonnees)
  const partie3 = "et vous êtes acctuellement le " +creeDate() + ","
  const partie4 = "Bonne journée à vous !"
return partie1 + " " + partie2 + " " + partie3 + " " + partie4 
}

console.log (bonjour(dataPatched))