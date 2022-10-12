const laureatesService = require("../services/laureates.service")
const validator = require("validator")

exports.getAll = (req, res) => {
    let userId = req.params.userId
    // console.log(userId);
    userId = typeof userId === "undefined" ? "" : userId
    // console.log(req.params.userId);
    if (validator.isEmpty(userId) || userId == "{userId}" || userId == "undefined") {
        laureatesService.getLaureates((error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                //Question 4
                nombrePrixOfferts : results.length, 
                data: results
            })
        })
    } 
    else if (validator.isInt(userId)) {
        laureatesService.getLaureatesById(userId, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    } 
    else {
        return res.status(400).send({
            success: 0,
            data: "Invalid user id"
        })
    }
}


exports.getN = (req, res) => {
    let nbrMorePrix = req.params.nbrMorePrix
    nbrMorePrix = typeof nbrMorePrix === "undefined" ? "" : nbrMorePrix
    console.log(nbrMorePrix);
    prizesService.getMorePrix((error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                data: error
            })
        }
        else if(nbrMorePrix == "f5"){
            return res.status(200).json({
                success: 1,
                data: results
            })
        }
        else {
            return res.status(400).send({
                success: 0,
                data: "Invalid year or String"
            })
        }
    })
}
