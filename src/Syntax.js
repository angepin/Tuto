"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var watch = require('tsc-watch/client');
module.exports = function () { return ({
    presets: [
        require("@babel/preset-stage-2"),
    ],
    plugins: [
        [require("@babel/plugin-proposal-class-properties"), { loose: true }],
        require("@babel/plugin-proposal-object-rest-spread"),
    ]
}); };
function lieu(localite) {
    return localite.ville + " en " + localite.pays;
}
function creeDate() {
    var frLocale = require('date-fns/locale/fr');
    var result = date_fns_1.format(new Date(), 'D MMMM YYYY', { locale: frLocale });
    return result;
}
var data = {
    nom: "Tom",
    ville: "Niort",
    pays: "France"
};
function bonjour(coordonnees) {
    var partie1 = "Bonjour " + coordonnees.nom;
    var partie2 = "nous somme le " + creeDate();
    var partie3 = "et vous êtes actuellement à " + lieu(data);
    return partie1 + " " + partie2 + " " + partie3;
}
console.log(bonjour(data));
