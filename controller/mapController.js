
const loadMap = async(req,res)=>{
    try {
        res.render('maps');
    } catch (error) {
        console.log(error.message);
    }
}

const safetyMap = async(req,res)=>{
    try {
        res.render('safetyMap');
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    loadMap,
    safetyMap
}