


const {importarBicicletas} = require('./datosBici.js');


const dhBici = {
    
    bicicletas: importarBicicletas(),
    
    buscarBici:  function (ident){
        // console.log(this.bicicletas);
       const bici =  this.bicicletas.filter(bici => bici.id === ident)
            // console.log(bici.length)
         return bici.length > 0 ? bici[0] : null;   
              
    },

    buscarBici2:  function (ident){
        
       return this.bicicletas.find(bici => bici.id === ident) ? bici : null;
        //    return rodado ? bici : null;
                     
    },
    
    
    
    venderBici:  function (identificador){
        
        for (let i = 0; i < this.bicicletas.length; i++) {
            if (this.bicicletas[i].id === identificador){
                this.bicicletas[i].vendida = true;
                return this.bicicletas[i];
            }
            
          } 
          return 'Bicicleta no encontrada';

    
    // const bici =  this.bicicletas.filter(bici => bici.id === ident)
    // // console.log(bici.length)
    // return bici.length > 0 ? bici[0] : null;   
    
},

biciParaLaVenta: function() {
    return this.bicicletas.filter(bici => bici.vendida === false);
},

totalDeVentas: function(){
    return this.bicicletas.reduce((acumulador,bici) => {
        return bici.vendida ? acumulador + bici.precio : acumulador;
    },0);
},

// --- DESAFIO EXTRA ----

aumentoDeBici: function(porcentajeAumento){
     this.bicicletas.map(function(bici){
        bici.precio += bici.precio * (porcentajeAumento / 100);
        
        return bici;

    })
console.log(dhBici.bicicletas,"esto es con aumento de precio")
    
    },

    biciPorRodado: function(valor){
        return this.bicicletas.filter(bici => bici.rodado === valor);
    },

    listarTodasLasBici: function(){
        for(let bicis of this.bicicletas){
            console.log(bicis);
        }
    }
}



// console.log(dhBici.buscarBici(4))
// console.log(dhBici.buscarBici2(22))
// console.log(dhBici.venderBici(20))
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas())
// console.log(dhBici.aumentoDeBici(10));
// console.log(dhBici.biciPorRodado(28))
console.log(dhBici.listarTodasLasBici());
