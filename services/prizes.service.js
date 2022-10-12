const fs = require('fs')

const getAll = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        prizes = JSON.parse(dataJSON).prizes;
        return callback(null, prizes);
    } catch (e) {
        callback(null, e)
    }
}


///// ////                 QUESTION 3
const getNbPrix = (year, callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        prizes = JSON.parse(dataJSON).prizes
        nbPrix = []
        prizes.forEach(function (element) {
                    if (element.year == year)
                        nbPrix.push({
                            type: element.laureates})
            }
        );
        return callback(null, nbPrix);
    } 
    catch (e) {
        callback(null, e)
    }
}


const getMorePrix= (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        prizes = JSON.parse(dataJSON).prizes
        nbMorePrix = []
        prizes.forEach(function (element) {
            for (let i in element.laureates){
                nbMorePrix.push({e: element.laureates[i].id})
            }
        });
        // for (let i in nbMorePrix){
        //     let found = nbMorePrix.find(element => 1 = 1);
        //     console.log(found); 
        // }
        // });
        return callback(null, nbMorePrix);
    } 
    catch (e) {
        callback(null, e)
    }
}

module.exports = {
    getAll: getAll,
    getNbPrix: getNbPrix,
    getMorePrix: getMorePrix
}
