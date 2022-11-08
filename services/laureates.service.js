var pagePrzies = require('../prizes');
var prizes = pagePrzies.prizes;

////                 QUESTION 1/4
const getLaureates = (pagination,id,callback) => {
    try {
        let laureates = []
        prizes.forEach(function (element) {
            for (let i in element.laureates){
                laureates.push({
                    id: element.laureates[i].id,
                    firstname: element.laureates[i].firstname,
                    surname: element.laureates[i].surname,
                })
            }
        });
        laureatesUnique =  laureates.filter((laureate,id,a)=>a.findIndex(t=>(t.id === laureate.id))===id)
        if (pagination =="undefined" || pagination == "{pagination}"){
            return callback(null, laureatesUnique);
        }
        return callback(null, laureatesUnique.slice((pagination-1)*10,(pagination-1)*10+10));
    } catch (e) {
        console.log(e);
        callback(e)
    }
}

////                 QUESTION 2
const getLaureatesById = (pagination,id, callback) => {
    try {
        let user = "User not found"
        prizes.forEach(function (prize) {
            if(prize.laureates){
                for (let i in prize.laureates){
                    if (prize.laureates[i].id == id){
                        user = {
                            id: prize.laureates[i].id,
                            firstname: prize.laureates[i].firstname,
                            surname: prize.laureates[i].surname
                        }
                    }
                }
            }
        });
        if (pagination =="undefined" || pagination == "{pagination}"){
            return callback(null, user);
    } 
    }catch (e) {
        console.log(e);
        callback(e)
    }
}

//F5
const getMorePrix= (callback) => {
    try {
        a =[];
        b=[];
        nbMorePrix = []
        prizes.forEach(function (element) {
            if(element.laureates != null){
                element.laureates.forEach((i) => {
                    if(!a.find((x) => x.id === i.id)){
                        a.push({
                            id: i.id,
                            firstname: i.firstname,
                            surname: i.surname,
                            nb: 1
                        })
                    }
                    else{
                        a.forEach((n)=>{
                            if (n.id===i.id){
                                n.nb +=1;
                            }
                        })
                    }
                })
            }
        });
        a.forEach((n)=>{
            if(n.nb>1){
                b.push({
                    id: n.id,
                    firstname: n.firstname,
                    surname: n.surname,
                    nb: n.nb
                })
            }
        })
        return callback(null, b);
    } 
    catch (e) {
        console.log(e);
        callback(e)
    }
}


module.exports = {
    getLaureates: getLaureates,
    getLaureatesById: getLaureatesById,
    getMorePrix: getMorePrix
}