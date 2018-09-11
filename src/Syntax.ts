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

function whois ({DisplayFirstName,DisplayLastName}: info) {
  return DisplayFirstName + " " + DisplayLastName
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
  DisplayFirstName: string
  DisplayLastName: string
}

interface geoinfo {
  ville: string
  pays: string
}


const data: info = {
  DisplayFirstName: "Elx",
  DisplayLastName: "Chapo",
  ville: "Niort",
  pays: "France"
}


function bonjour (coordonnees: info):string {
  const partie1 = "Bonjour " +whois(coordonnees)
  const partie2 = "nous somme le " +creeDate()
  const partie3 = "et vous êtes actuellement à " +lieu(coordonnees)
  return partie1 + " " + partie2 + " " + partie3
}
console.log (bonjour (data))
