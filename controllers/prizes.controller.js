const prizesService = require("../services/prizes.service")
const validator = require("validator")

// exports.getAll = (req, res) => {
//     prizesService.getAll((error, results) => {
//         if (error) {
//             return res.status(500).json({
//                 success: 0,
//                 data: error
//             })
//         }
//         return res.status(200).json({
//             success: 1,
//             nombrePrix : results.prizes.length,
//             data: results
//         })
//     })
// }                                    

exports.getAll = (req, res) => {
    let userId = req.params.userId
    userId = typeof userId === "undefined" ? "" : userId
    // console.log(req.params.userId);
    if (validator.isEmpty(userId) || userId == "{userId}" || userId == "undefined") {
        prizesService.getLaureates((error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                nombrePrix : results.length,
                data: results
            })
        })
    } 
    else if (validator.isInt(userId)) {
        prizesService.getById(userId, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                nombrePrix : results.length,
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
