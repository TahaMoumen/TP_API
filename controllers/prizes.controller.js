const prizesService = require("../services/prizes.service")
const validator = require("validator")
// const { getLaureatesById } = require("../services/laureates.service")


exports.getPrizes = (req, res) => {
    let year = req.params.year
    year = typeof year === "undefined" ? "" : year
    console.log(year);
    if ((validator.isEmpty(year) || year == "{year}" || year == "undefined")){
        prizesService.getAll((error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                nombrePrix: results.length,
                data: results
            })
        })
    } 
    else if (validator.isInt(year)) {
        prizesService.getNbPrix(year, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                nombrePrix: results.length,
                data: results
            })
        })
    }
    else {
        return res.status(400).send({
            success: 0,
            data: "Invalid year or String"
        })
    }
}
