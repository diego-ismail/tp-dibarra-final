const axios = require("axios");
const {validationResult} = require("express-validator")
 

module.exports = {
    async mostrarListado(req, res){
        try{
            const err = validationResult(req)
            if (err.isEmpty()) {
                console.log("error está vacío")
                const headers ={
                    'X-RapidAPI-Key': '52524ad617mshd2b7937fdde62ddp1b153ejsn9fa79c6bfe72',
                    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
                  }
                const stringBusqueda = "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + req.params.name
                  const {data} = await axios.get(stringBusqueda,
                                               { headers },
                                               //{ params: { ingr: 'pizza', }},
                                            ) 
                res.status(201).json(data.parsed)
            } else {
                res.status(502).json(err)
            }
            
        }
        catch (error) {
            console.log(error)
            res.status(501).json(error)
            console.log("parametros:" ,req.params.name)
        }
    }
}