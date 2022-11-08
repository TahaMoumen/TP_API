var PrizeJson = require('../prizes');
var prizes = PrizeJson.prizes;


const getPrizeJson = (callback)=>{
    try {
        return callback(null, prizes);
    } catch (e) {
        console.log(e);
        callback(e, null)
    }
}

const getAll = async (callback) => {
    try {
        nbPrix = []
        prizes.forEach(function (element) {
            if(element.laureates){
                nbPrix.push({
                    type: element.laureates})
            }
        });
        return callback(null, nbPrix);
    } catch (e) {
        callback(e)
    }
}


//F3
const getNbPrix = (year, callback) => {
    try {
        nbPrix = []
        prizes.forEach(function (element) {
            if(element.laureates){
                if (element.year == year){
                    nbPrix.push({
                        type: element.laureates})
                }
            }
        });
        return callback(null, nbPrix);
    } 
    catch (e) {
        console.log(e);
        callback(e)
    }
}



//F6
const getCategory= (callback)=>{
    cat=new Set();
    category= []
    try {
        prizes.forEach(function (element) {
            cat.add(element.category);
        })
        cat.forEach((e)=>{
            category.push(e)
        })
        return callback(null,category)
    } 
    catch (e) {
        console.log(e);
        callback(e)
    }
}

///F7
const categoryMax = (callback)=>{
    try{
        const categories = [];
        prizes.forEach(function (element) {
            if(element.laureates){
                element.laureates.forEach(function (laureate) {
                if (!categories.find(i =>i.category == element.category)){
                    categories.push({category: element.category, count: 1});
                }
                else {
                    categories[categories.findIndex(i => i.category == element.category)]
                        .count = categories[categories.findIndex(i => i.category == element.category)].count + 1;
                }
            })
        }
    });
        category=[]
        category.push({category: categories.sort((a, b) => b.count - a.count)[0].category,
                    nb: categories.sort((a, b) => b.count - a.count)[0].count});
        return callback(null, category);
    }catch (e){
        console.log(e);
        callback(e)
    }
}


///F8 utiliseé dans F11
const getLaureatesPerYear = (callback) => {
    try{
        const annee = [];
        prizes.forEach(function (element) {
            if(element.laureates){
                element.laureates.forEach(function (laureate) {
                if (!annee.find(i =>i.year == element.year)){
                    annee.push({year: element.year, nb: 1});
                }
                else {
                    annee[annee.findIndex(i => i.year == element.year)]
                        .nb = annee[annee.findIndex(i => i.year == element.year)].nb + 1;
                }
            })
        }
    });
        return callback(null, annee);
    }catch (e){
        console.log(e);
        callback(e)
    }
}

//F9
const getPrizesID= (id, callback) => {
    try {
        a =[];
        prizes.forEach((prize) => {
            if (prize.laureates) {
                prize.laureates.forEach((l) => {
                    let tmp = a.find(la => la.id === l.id)
                    if (!tmp) {
                        if (id === l.id) {
                            a.push({ 
                                id: l.id,
                                name: l.firstname + " " + l.surname,
                                motivations: [
                                    {
                                        motiv: prize.year + " "+prize.category + " " + l.motivation
                                    },
                                ],
                            });
                        }
                        else{
                            a.push("id not found")
                        }
                    } 
                    else if (tmp) {
                        a.forEach((r) => {
                            if (r.id === id) {
                                r.motivations.push({
                                    motiv: prize.year +" " + prize.category +" "+l.motivation
                                });
                            }
                        })
                    }
                });
            }
        });
        const uniqueSet = new Set(a.map(JSON.stringify));
        const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        return callback(null, uniqueArray.flat(Infinity));
    } catch (e) {
        console.log(e);
        callback(e, null)
    }
}

//F10
const noPrizes= (callback) => {
    try{
        //prize with no laureate
        const annee = [];
        let anneeNo = []
        prizes.forEach(function (element) {
            if(!element.laureates){
                if (!annee.find(i =>i.year == element.year)){
                    annee.push({year: element.year, nb: 1});
                }
                else {
                    annee[annee.findIndex(i => i.year == element.year)]
                        .nb = annee[annee.findIndex(i => i.year == element.year)].nb + 1;
                }
            }
        });
        annee.forEach(a =>{
            if (a.nb == 5 ){
                anneeNo.push(a.year)
            } 
        })      
        return callback(null, anneeNo);
    }catch (e){
        console.log(e);
        callback(e)
    }
}

//F12
const getPrizesFiltred = (firstname_filter,surname_filter,category_filter, callback) => {
    let data = []
    let set = new Set()

    try {
    
        // filter by category
        if ((firstname_filter == "{firstname}"||firstname_filter=="undefined") && (surname_filter=="{surname}"||surname_filter=="undefined")) {
            data.push("filtred by category : "+ category_filter)
            prizes.forEach((prize) => {
                if (prize.laureates) 
                    prize.laureates.forEach((laureate) => {
                        if (category_filter == prize.category) {
                            data.push(laureate)
                        }
                    })
            })
            console.log("Filtered by category !")
        }

        // filter by surname
        if ((category_filter == "{category}"||category_filter=="undefined") && (surname_filter=="{surname}"||surname_filter=="undefined")) {
            data.push("filtred by firstname : "+firstname_filter)
            prizes.forEach(prize=>{
                if (prize.laureates) 
                    prize.laureates.forEach(laureate=>{
                        if (firstname_filter == laureate.firstname){
                            data.push(laureate)
                        } 
                    })
            })
            console.log("Filtered by firstname !")
        }

        // filter by firstname
        if ((category_filter == "{category}"||category_filter=="undefined") && (firstname_filter=="{firstname}"||firstname_filter=="undefined")) {
            data.push("filtred by surname : "+surname_filter)
            prizes.forEach(prize=>{
                if (prize.laureates) 
                    prize.laureates.forEach(laureate=>{
                        if (surname_filter == laureate.surname){
                            data.push(laureate)
                        } 
                    })
            })
            console.log("Filtered by surname !")
        }

        //filter by surname and firstname
        if ((category_filter == "{category}"||category_filter=="undefined")) {
            prizes.forEach(prize=>{
                if (prize.laureates) 
                    prize.laureates.forEach(laureate=>{
                        if (firstname_filter == laureate.firstname && surname_filter == laureate.surname){
                            data.push("filtred by" + " firstname : "+firstname_filter + " and surname : "+ surname_filter)
                            data.push(laureate)
                        } 
                    })
            })
            console.log("Filtered by firstname and surname !")
        }

        // filter by category and surname
        if ((firstname_filter == "{firstname}"||firstname_filter=="undefined")) {
            prizes.forEach(prize=>{
                if (prize.laureates) 
                    prize.laureates.forEach(laureate=>{
                        if (category_filter == prize.category && surname_filter == laureate.surname){
                            data.push("filtred by" + "surname : "+surname_filter + " and category : "+ category_filter)
                            data.push(laureate)
                        } 
                    })
            })
            console.log("Filtered by category and surname !")
        }

        // filter by category and firstname
        if ((surname_filter == "{surname}"||surname_filter=="undefined")) {
            prizes.forEach(prize=>{
                if (prize.laureates) 
                    prize.laureates.forEach(laureate=>{
                        if (category_filter == prize.category && firstname_filter == laureate.firstname){
                            data.push("filtred by" + " firstname : "+firstname_filter +" and category : "+ category_filter)
                            data.push(laureate)
                        } 
                    })
            })
        }

        // filter by firstname, surname and category
        if ((firstname_filter != "{firstname}" || firstname_filter != "{undefined}" ) && (surname_filter != "{surname}"||surname_filter != "{undefined}" )&& (category_filter != "{category}"||category_filter != "{undefined}")) {
            prizes.forEach(prize=>{
                if (prize.laureates) 
                    prize.laureates.forEach(laureate=>{
                        if (category_filter == prize.category && firstname_filter == laureate.firstname && surname_filter == laureate.surname){
                            data.push("filtred by" +" firstname : "+firstname_filter + " surname : "+ surname_filter+" and category : "+ category_filter)
                            data.push(laureate)
                        } 
                    })
            })
            console.log("Filtered by firstname, surname and category !")
        }
        return callback(null, data)
    }catch (e) {
        console.log(e)
        callback(e)
    }
}


//F13
const deletePrizesID=(id,callback)=>{
    try {
        prizes.forEach((prize) => {
            if (prize.laureates) {
                prize.laureates.forEach((l) => {
                    if (id === l.id) {
                        prize.laureates.splice(prize.laureates.indexOf(l),1)
                    }
                });
            }
        });
        return callback(null, "The laureate with the id " + id + " has been deleted");
    } catch (e) {
        console.log(e);
        callback(e, null)
    }
}

//F14
const updateMotivation = (id,year,category,newUpdate,callback)=>{
    try {
        prizes.forEach(prize => {
            if (prize.laureates){
                prize.laureates.forEach(laureate => {
                    if (laureate.id == id && prize.year == year && prize.category == category) {
                        prize.laureates = {
                            year: laureate.year,
                            category: prize.category,
                            laureates: [
                                {
                                    id: laureate.id,
                                    firstname: laureate.firstname,
                                    surname: laureate.surname,
                                    motivation: newUpdate.motivation,
                                    share: laureate.share
                                }
                            ]
                        }
                    }
                });
            }
        });
        return callback(null, "The motivation of the laureate with id "+ id +" and categrory "+ category +" have changed to : "+ newUpdate.motivation );
    } catch (e) {
        console.log(e);
        callback(e, null)
    }
}

//F15
const  addLaureateByIdYearCategory = (year, category, data, callback)=>{
    try{
        let id = prizes.filter(prize => prize.laureates).find(prize => prize.laureates.find(i => i.firstname == data.firstname && i.surname == data.surname))
        if(id === undefined)
            id = Math.max(...prizes.filter(p => p.laureates).map(p => p.laureates.map(l => l.id)).flat(Infinity))+1
        else
            id = id.laureates.find(i => i.firstname == data.firstname && i.surname == data.surname).id
            
        let laureates = [];
        laureates = prizes.map(prize => {
            if(prize.year == year && prize.category == category) {
                if (prize.laureates ){
                    prize.laureates.forEach(l=>{
                        if(data.firstname!=l.firstname || data.surname != l.surname){
                            laureates.push(l)
                        }
                    })
                }
                laureates.push({
                    id: id,
                    firstname: data.firstname,
                    surname: data.surname,
                    motivation: data.motivation,
                    share: data.share
                })
                delete prize.overallMotivation
                prize.laureates = laureates
            }
        })
        prizes.forEach(prize =>{
            if(prize.year == year){
                return callback(null, prize);
            }
        })
        return callback(null, prizes);
    }catch (e){
        console.log(e);
        callback(e,null)
    }
}

module.exports = {
    getPrizeJson: getPrizeJson,
    getAll: getAll,
    getNbPrix: getNbPrix,
    getCategory: getCategory,
    categoryMax: categoryMax,
    getLaureatesPerYear: getLaureatesPerYear,
    getPrizesID: getPrizesID,
    noPrizes: noPrizes,
    getPrizesFiltred: getPrizesFiltred,
    deletePrizesID: deletePrizesID,
    updateMotivation: updateMotivation,
    addLaureateByIdYearCategory: addLaureateByIdYearCategory

}


