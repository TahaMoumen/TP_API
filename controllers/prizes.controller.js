const prizesService = require("../services/prizes.service")
const validator = require("validator")


exports.getPrizeJson = (req, res)=>{
    prizesService.getPrizeJson((error, results) => {
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

//F3
exports.getPrizes = (req, res) => {
    let year = req.params.year
    year = typeof year === "undefined" ? "" : year
    if ((validator.isEmpty(year) || year == "{year}" || year == "undefined")){
        prizesService.getAll(async (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                nombrePrix: results.length
            })
        })
    } 
    else if (validator.isInt(year)) {
        prizesService.getNbPrix(year, async (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                nombrePrix: results.length
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




//F6
exports.getCategory = (req,res) => {
    prizesService.getCategory((error, results) => {
        if (error) {
            return res.status(500).json({
                success: 0,
                data: error
            })
        }
        else{
            return res.status(200).json({
                success: 1,
                data: results
            })
        }
    })
}

//F7
exports.categoryMax = (req, res) => {
    prizesService.categoryMax((error, results) => {
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

//F8
exports.laureatesPerYears = (req, res) => {
    prizesService.getLaureatesPerYear((error, results) => {
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


//F9
exports.prizesPerId = (req, res) => {
    let id = req.params.id
    id = typeof id === "undefined" ? "" : id
    if (validator.isInt(id)) {
        prizesService.getPrizesID(id, (error, results) => {
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
            data: "Invalid Id "
        })
    }
}

//F10
exports.noPrizes= (req, res) => {
    prizesService.noPrizes((error, results) => {
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

exports.laureatesPerYearsDesc = (req, res) => {
    let ordre = req.params.ordre
    ordre = typeof ordre === "undefined" ? "" : ordre
    if (ordre == "desc") {
        prizesService.getLaureatesPerYear((error, results) => {
            a=results
            triedResult=a.sort((x, y) => y.nb - x.nb)
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                data: triedResult
            })
        })
    }
    else if (ordre=="asc"){
        prizesService.getLaureatesPerYear((error, results) => {
            a=results
            triedResulta=a.sort((x, y) => x.nb - y.nb)
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            return res.status(200).json({
                success: 1,
                data: triedResulta
            })
        })
    }else{
        return res.status(400).send({
            success: 0,
            data: "Invalid  input chose 'asc' or 'desc'"
        })
    }
}

//F12
exports.getPrizesFiltred = (req, res) => {
    let firstname = req.params.firstname
    let surname = req.params.surname
    let category = req.params.category
    
    firstname = typeof firstname === "undefined" ? "" : firstname
    surname = typeof surname === "undefined" ? "" : surname
    category = typeof category === "undefined" ? "" : category

    if ((validator.isEmpty(firstname) || firstname == "{firstname}" || firstname == "undefined") && (validator.isEmpty(surname) || surname == "{surname}" || surname == "undefined")&& (validator.isEmpty(category) || category == "{category}" || category == "undefined")) {
        return res.status(400).send({
            success: 0,
            data: "Put some filter"
        })
    }
    else {
        prizesService.getPrizesFiltred(firstname,surname,category, (error, results) => {
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
}
//F13
exports.deletePrizesPerId=(req,res)=>{
    let id = req.params.id
    id = typeof id === "undefined" ? "" : id
    if (validator.isInt(id)) {
        prizesService.deletePrizesID(id, (error, results) => {
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
            data: "Invalid Id "
        })
    }
}

//F14
exports.updateMotivations=(req,res)=>{
    let id = req.params.id
    let annee = req.params.annee
    let category = req.params.category
    let newUpdate ={motivation: req.body.motivation};

    id = typeof id === "undefined" ? "" : id
    annee = typeof annee === "undefined" ? "" : annee
    category = typeof category === "undefined" ? "" : category
    newUpdate = typeof newUpdate === "undefined" ? "" : newUpdate

    if ((validator.isEmpty(id) || id == "{id}" || id == "undefined") && (validator.isEmpty(category) || category == "{category}" || category == "undefined")&& (validator.isEmpty(annee) || annee == "{annee}" || annee == "undefined")&&(validator.isEmpty(newUpdate) || newUpdate == "{newUpdate}" || newUpdate == "undefined")) {
        return res.status(400).send({
            success: 0,
            data: "Arguments are required"
        })
    }
    else {
        prizesService.updateMotivation(id,annee,category,newUpdate, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: 0,
                    data: error
                })
            }
            else{
                return res.status(200).json({
                success: 1,
                data: results
                
                })
            }
        })
    }
}


// F15
exports.addLaureateByYearCategory = (req, res)=>{
    let year = req.params.year;
    let category = req.params.category;
    let data = {
        firstname: req.body.firstname,
        surname: req.body.surname,
        motivation: req.body.motivation,
        share: req.body.share
    };
    prizesService.addLaureateByIdYearCategory(year, category, data, (error, results)=>{
        if (error) {
            return res.status(400).json({
                success: 0,
                data: error
            })
        }
        return res.status(200).json({
            success: 1,
            data: results
        })
    });
}