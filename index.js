#! /usr/bin/env node

const fs = require('fs')
var colors = require('colors');

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data.rainbow)
        return data;
    }
})