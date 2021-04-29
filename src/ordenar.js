//3. Usando forEach extraer el nombre del estudiante con el score más alto

let mayorScore = {};
let mayor = 0;
let mayorRanking = []
function obtScore(array=[]) {
  array.forEach((item)=>{
    
    if(item.score > mayor){
      mayorRanking.push(item)
    }
  })
  return mayor;
}

module.exports = obtScore;
