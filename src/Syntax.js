"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function lieu(_a, rue) {
    var ville = _a.ville, pays = _a.pays;
    return ville + " en " + pays + (rue && rue.concat(" appartement b"));
}
function whois(_a) {
    var displayFirstName = _a.displayFirstName, displayLastName = _a.displayLastName;
    return displayFirstName + " " + displayLastName;
}
function dateEnString(uneDate) {
    var frLocale = require('date-fns/locale/fr');
    var maDate = uneDate ? uneDate : new Date();
    var result = date_fns_1.format(maDate, 'D MMMM YYYY', { locale: frLocale });
    return result;
}
var data = {
    id: {
        displayFirstName: "Angelo",
        displayLastName: "Pinto",
        birthdate: new Date(2001, 9, 1)
    },
    location: {
        ville: "Niort",
        pays: "France",
        street: "13 Avenue de Paris"
    }
};
var patch = {
    id: {
        displayFirstName: "Magellan",
        displayLastName: "Fernand",
        birthdate: new Date(1480, 1, 3)
    },
    location: {
        ville: "Rionegro",
        pays: "Colombie",
        street: " 13 marshall street"
    }
};
var dataPatched = __assign({}, data, patch);
function bonjour(_a) {
    var id = _a.id, location = _a.location, street = _a.location.street;
    var partie1 = "Bonjour " + whois(id) + ", je vous souhaite la bienvenue";
    var partie2 = "à " + lieu(location, street);
    var partie3 = "et vous êtes actuellement le " + dateEnString(new Date()) + ",";
    var partie4 = "votre anniversaire est le " + dateEnString(id.birthdate);
    return partie1 + " " + partie2 + " " + partie3 + " " + partie4;
}
console.log(bonjour(dataPatched));
