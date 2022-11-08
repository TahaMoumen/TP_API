const laureatesService = require("../services/laureates.service")
const validator = require("validator")

exports.getLaureates = (req, res) => {
    let page = 0
    let pagination = req.params.pagination
    let userId = req.params.userId
    userId = typeof userId === "undefined" ? "" : userId
    pagination = typeof pagination === "undefined" ? "" : pagination
    if ((validator.isEmpty(userId) || userId == "{userId}" || userId == "undefined") && (validator.isEmpty(pagination) || pagination == "{pagination}" || pagination == "undefined")) {
        laureatesService.getLaureates(pagination,userId,(error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                //Question F4
                F4 : results.length, 
                data: results
            })
        })
    }
    else if(validator.isInt(pagination)){
        laureatesService.getLaureates(pagination,userId,(error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                page: pagination,
                data: results
            })
        })
    } 
    else if (validator.isInt(userId)) {
        laureatesService.getLaureatesById(pagination,userId, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            if(results == "User not found"){
                return res.status(200).json({
                    success: 1,
                    data: results
                    })
                }
            else{
                return res.status(200).json({
                    success: 1,
                    nombrePrixOfferts:results.length,
                    data: results
                })
            }
        })
    } 
    else {
        return res.status(400).send({
            success: 0,
            data: "Invalid id"
        })
    }
}


exports.getNbStudents = (req, res) => {
    laureatesService.getMorePrix((error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                data: error
            })
        }
        else{
            return res.status(200).json({
                success: 1,
                nombre_eleves_avec_plus_dun_prix: results.length,
                data: results
            })
        }
    })
}

// exports.getLaureatebyID=(req,res)=>