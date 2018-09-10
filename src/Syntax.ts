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
});

function lieu (localite: info) {
  return localite.ville + " en " + localite.pays
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

interface info {
  nom: string
  ville: string
  pays: string
}

const data: info = {
  nom: "Tom",
  ville: "Niort",
  pays: "France"
}

function bonjour (coordonnees: info):string {
  const partie1 = "Bonjour " +coordonnees.nom
  const partie2 = "nous somme le " +creeDate()
  const partie3 = "et vous êtes actuellement à " +lieu(data)
  return partie1 + " " + partie2 + " " + partie3
}
console.log (bonjour (data))
