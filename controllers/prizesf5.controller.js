const prizesService = require("../services/prizes.service")
const validator = require("validator")
    
    
    
    
    
exports.getN = (req,res) => {
    let nbrMorePrix = req.params.nbrMorePrix
    nbrMorePrix = typeof nbrMorePrix === "undefined" ? "" : nbrMorePrix
    if ((validator.isEmpty(nbrMorePrix) || nbrMorePrix == "{any}" || nbrMorePrix == "undefined")){
        prizesService.getMorePrix((error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                // nombrePrix: results.length,
                data: results
            })
        })
    }
    else{
        return res.status(400).send({
            success: 0,
            data: "Invalid year or String"
        })
    }
}