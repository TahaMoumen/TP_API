const { count } = require('console')
const fs = require('fs')
const { basename } = require('path')
const dataBuffer = fs.readFileSync('prize.json')
const dataJSON = dataBuffer.toString()
prizes = JSON.parse(dataJSON).prizes

exports.prizes = prizes;