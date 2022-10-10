const fs = require('fs')


const getLaureates = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        prizes = JSON.parse(dataJSON).prizes
        laureates = []
        prizes.forEach(function (element) {
            laureates.push(element.laureates)
        });
        // console.log(laureates.length);
        return callback(null, laureates);
    } catch (e) {
        return callback([])
    }
}


const getById = (id, callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        prizes = JSON.parse(dataJSON).prizes
        laureates = []
        prizes.forEach(function (element) {
            laureates.push(element.laureates)
        });
        // console.log(laureates.length);
        return callback(null, laureates);
    } catch (e) {
        return callback([])
    }
}

module.exports = {
    getLaureates: getLaureates,
    getById: getById
}



// const getAll = (id, callback) => {
//     try {
//         const dataBuffer = fs.readFileSync('prize.json')
//         const dataJSON = dataBuffer.toString()
//         // console.log( JSON.parse(dataJSON).prizes.years=2021);
//         return callback(null, JSON.parse(dataJSON).prizes);
//     } catch (e) {
//         return callback([])
//     }
// }