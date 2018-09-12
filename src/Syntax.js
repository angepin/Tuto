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
module.exports = function () { return ({
    presets: [
        require("@babel/preset-stage-2"),
    ],
    plugins: [
        [require("@babel/plugin-proposal-class-properties"), { loose: true }],
        require("@babel/plugin-proposal-object-rest-spread"),
    ]
}); };
var lieu = function (_a) {
    var ville = _a.ville, pays = _a.pays;
    return ville + " en " + pays;
};
var whois = function (_a) {
    var displayFirstName = _a.displayFirstName, displayLastName = _a.displayLastName;
    return displayFirstName + " " + displayLastName;
};
var dateEnString = function (uneDate) {
    var frLocale = require('date-fns/locale/fr');
    var maDate = uneDate ? uneDate : new Date();
    return date_fns_1.format(maDate, 'D MMMM YYYY', { locale: frLocale });
};
var data = {
    id: {
        displayFirstName: "Angelo",
        displayLastName: "Pinto",
        birthdate: new Date(2001, 9, 1)
    },
    location: {
        ville: "Niort",
        pays: "France",
        street: " 13 Avenue de Paris"
    }
};
var patch = {
    id: {
        displayFirstName: "Magellan",
        displayLastName: "Fernand",
        birthdate: new Date(1480, 1, 3)
    },
    location: {
        ville: "Porto",
        pays: "Portugal",
        street: " 15 Lordelo do Ouro"
    }
};
var dataPatched = __assign({}, data, patch);
var bonjour = function (_a) {
    var id = _a.id, location = _a.location;
    var partie1 = "Bonjour " + whois(id) + ", je vous souhaite la bienvenue";
    var partie2 = "à " + lieu(location);
    var partie3 = "et vous êtes actuellement le " + dateEnString(new Date()) + ",";
    var partie4 = "votre anniversaire est le " + dateEnString(id.birthdate) + " et vous êtes mort";
    return partie1 + " " + partie2 + " " + partie3 + " " + partie4;
};
console.log(bonjour(dataPatched));
