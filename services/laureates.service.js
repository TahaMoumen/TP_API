const { count } = require('console')
const fs = require('fs')

////                 QUESTION 1/4
const getLaureates = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        prizes = JSON.parse(dataJSON).prizes
        laureates = []
        prizes.forEach(function (element) {
            for (let i in element.laureates){
                laureates.push({
                    id: element.laureates[i].id,
                    firstname: element.laureates[i].firstname,
                    surname: element.laureates[i].surname,
                })
            }
        });
        laureatesUnique = [...new Set(laureates.map(item => item.id))].map(id => {
            return laureates.find(a => a.id === id)
            })
        return callback(null, laureatesUnique);
    } catch (e) {
        callback(null, e)
    }
}

////                 QUESTION 2
const getLaureatesById = (id, callback) => {
    try {
        const dataBuffer = fs.readFileSync('prize.json')
        const dataJSON = dataBuffer.toString()
        prizes = JSON.parse(dataJSON).prizes
        laureates = []
        let user = "User not found"
        prizes.forEach(function (element) {
            for (let i in element.laureates){
                    if (element.laureates[i].id == id){
                        user = ({
                            firstname: element.laureates[i].firstname,
                            surname: element.laureates[i].surname
                })}
            }
        });
        return callback(null, user);
    } 
    catch (e) {
        callback(null, e)
    }
}

module.exports = {
    getLaureates: getLaureates,
    getLaureatesById: getLaureatesById
}



// prizes.forEach(function (element) {
//     for(let i in element.laureates){
//         laureatesPerson.push({
//             firstname: element.laureates[i].firstname,
//             surname: element.laureates[i].surname,
//             nbrPrix: 
//         })
//     }
// });